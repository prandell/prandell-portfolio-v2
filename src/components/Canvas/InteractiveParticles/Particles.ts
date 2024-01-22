import * as THREE from 'three'

import TouchTexture from './TouchTexture'
import { TweenLite } from 'gsap'

import vert from '../../../assets/shaders/particle.vert'
import frag from '../../../assets/shaders/particle.frag'

export default class Particles {
  webgl: any
  container: THREE.Object3D<THREE.Object3DEventMap>
  texture: THREE.Texture | undefined = undefined
  width: any
  height: any
  numPoints: number | undefined = undefined
  object3D: THREE.Mesh<
    THREE.InstancedBufferGeometry,
    THREE.RawShaderMaterial,
    THREE.Object3DEventMap
  > | null = null
  touch: any
  hitArea: THREE.Mesh<
    THREE.PlaneGeometry,
    THREE.MeshBasicMaterial,
    THREE.Object3DEventMap
  > | null = null
  handlerInteractiveMove: any
  constructor(webgl: any) {
    this.webgl = webgl
    this.container = new THREE.Object3D()
  }

  init(src: any) {
    const loader = new THREE.TextureLoader()

    loader.load(src, (texture) => {
      this.texture = texture
      this.texture.minFilter = THREE.LinearFilter
      this.texture.magFilter = THREE.LinearFilter
      this.texture.format = THREE.RGBAFormat

      this.width = texture.image.width
      this.height = texture.image.height

      this.initPoints(true)
      this.initHitArea()
      this.initTouch()
      this.resize()
      this.show()
    })
  }

  initPoints(discard: any) {
    this.numPoints = this.width * this.height

    let numVisible = this.numPoints
    let threshold = 0
    let originalColors: any

    if (discard) {
      // discard pixels darker than threshold #22
      numVisible = 0
      threshold = 34

      const img = this.texture?.image
      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')

      canvas.width = this.width
      canvas.height = this.height
      if (ctx !== null) {
        ctx.scale(1, -1)
        ctx.drawImage(img, 0, 0, this.width, this.height * -1)

        const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height)
        originalColors = Float32Array.from(imgData.data)

        for (let i = 0; i < this.numPoints; i++) {
          if (originalColors[i * 4 + 0] > threshold) numVisible++
        }
      }

      // console.log('numVisible', numVisible, this.numPoints);
    }

    const uniforms = {
      uTime: { value: 0 },
      uRandom: { value: 1.0 },
      uDepth: { value: 2.0 },
      uSize: { value: 0.0 },
      uTextureSize: { value: new THREE.Vector2(this.width, this.height) },
      uTexture: { value: this.texture },
      uTouch: { value: null }
    }

    const material = new THREE.RawShaderMaterial({
      uniforms,
      vertexShader: vert,
      fragmentShader: frag,
      depthTest: false,
      transparent: true
      // blending: THREE.AdditiveBlending
    })

    const geometry = new THREE.InstancedBufferGeometry()

    // positions
    const positions = new THREE.BufferAttribute(new Float32Array(4 * 3), 3)
    positions.setXYZ(0, -0.5, 0.5, 0.0)
    positions.setXYZ(1, 0.5, 0.5, 0.0)
    positions.setXYZ(2, -0.5, -0.5, 0.0)
    positions.setXYZ(3, 0.5, -0.5, 0.0)
    geometry.setAttribute('position', positions)

    // uvs
    const uvs = new THREE.BufferAttribute(new Float32Array(4 * 2), 2)
    uvs.setXYZ(0, 0.0, 0.0, 0)
    uvs.setXYZ(1, 1.0, 0.0, 0)
    uvs.setXYZ(2, 0.0, 1.0, 0)
    uvs.setXYZ(3, 1.0, 1.0, 0)
    geometry.setAttribute('uv', uvs)

    // index
    geometry.setIndex(
      new THREE.BufferAttribute(new Uint16Array([0, 2, 1, 2, 3, 1]), 1)
    )

    const indices = new Uint16Array(numVisible)
    const offsets = new Float32Array(numVisible * 3)
    const angles = new Float32Array(numVisible)

    for (let i = 0, j = 0; i < this.numPoints; i++) {
      if (discard && originalColors && originalColors[i * 4 + 0] <= threshold)
        continue

      offsets[j * 3 + 0] = i % this.width
      offsets[j * 3 + 1] = Math.floor(i / this.width)

      indices[j] = i

      angles[j] = Math.random() * Math.PI

      j++
    }

    geometry.setAttribute(
      'pindex',
      new THREE.InstancedBufferAttribute(indices, 1, false)
    )
    geometry.setAttribute(
      'offset',
      new THREE.InstancedBufferAttribute(offsets, 3, false)
    )
    geometry.setAttribute(
      'angle',
      new THREE.InstancedBufferAttribute(angles, 1, false)
    )

    this.object3D = new THREE.Mesh(geometry, material)
    this.container.add(this.object3D)
  }

  initTouch() {
    // create only once
    if (!this.touch) this.touch = new TouchTexture()
    if (this.object3D)
      this.object3D.material.uniforms.uTouch.value = this.touch.texture
  }

  initHitArea() {
    const geometry = new THREE.PlaneGeometry(this.width, this.height, 1, 1)
    const material = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      wireframe: true,
      depthTest: false
    })
    material.visible = false
    this.hitArea = new THREE.Mesh(geometry, material)
    this.container.add(this.hitArea)
  }

  addListeners() {
    this.handlerInteractiveMove = this.onInteractiveMove.bind(this)

    this.webgl.interactive.addListener(
      'interactive-move',
      this.handlerInteractiveMove
    )
    this.webgl.interactive.objects.push(this.hitArea)
    this.webgl.interactive.enable()
  }

  removeListeners() {
    this.webgl.interactive.removeListener(
      'interactive-move',
      this.handlerInteractiveMove
    )

    const index = this.webgl.interactive.objects.findIndex(
      (obj: any) => obj === this.hitArea
    )
    this.webgl.interactive.objects.splice(index, 1)
    this.webgl.interactive.disable()
  }

  // ---------------------------------------------------------------------------------------------
  // PUBLIC
  // ---------------------------------------------------------------------------------------------

  update(delta: any) {
    if (!this.object3D) return
    if (this.touch) this.touch.update()

    this.object3D.material.uniforms.uTime.value += delta
  }

  show(time = 1.0) {
    if (this.object3D) {
      TweenLite.fromTo(
        this.object3D.material.uniforms.uSize,
        time,
        { value: 0.5 },
        { value: 1.5 }
      )
      TweenLite.to(this.object3D.material.uniforms.uRandom, time, {
        value: 2.0
      })
      TweenLite.fromTo(
        this.object3D.material.uniforms.uDepth,
        time * 1.5,
        { value: 40.0 },
        { value: 4.0 }
      )

      this.addListeners()
    }
    // reset
  }

  hide(_destroy: any, time = 0.8) {
    return new Promise<void>((resolve) => {
      if (this.object3D) {
        TweenLite.to(this.object3D.material.uniforms.uRandom, time, {
          value: 5.0,
          onComplete: () => {
            if (_destroy) this.destroy()
            resolve()
          }
        })
        TweenLite.to(this.object3D.material.uniforms.uDepth, time, {
          value: -20.0,
          ease: 'easeIn'
        })
        TweenLite.to(this.object3D.material.uniforms.uSize, time * 0.8, {
          value: 0.0
        })

        this.removeListeners()
      }
    })
  }

  destroy() {
    if (!this.object3D) return

    this.object3D.parent?.remove(this.object3D)
    this.object3D.geometry.dispose()
    this.object3D.material.dispose()
    this.object3D = null

    if (!this.hitArea) return

    this.hitArea.parent?.remove(this.hitArea)
    this.hitArea.geometry.dispose()
    this.hitArea.material.dispose()
    this.hitArea = null
  }

  // ---------------------------------------------------------------------------------------------
  // EVENT HANDLERS
  // ---------------------------------------------------------------------------------------------

  resize() {
    if (!this.object3D) return

    const scale = (this.webgl.fovHeight * 0.9) / this.height
    this.object3D.scale.set(scale, scale, 1)
    if (this.hitArea) this.hitArea.scale.set(scale, scale, 1)
  }

  onInteractiveMove(e: any) {
    const uv = e.intersectionData.uv
    if (this.touch) this.touch.addTouch(uv)
  }
}
