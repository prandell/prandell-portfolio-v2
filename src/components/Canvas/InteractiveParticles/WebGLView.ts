import * as THREE from 'three'

import InteractiveControls from './InteractiveControls'
import Particles from './Particles'

export default class WebGLView {
  app: any
  samples: string[]
  scene: any
  camera: any
  renderer: any
  clock: any
  interactive: InteractiveControls | undefined = undefined
  particles: any
  currSample: null | number = null
  transitioning = false
  fovHeight: number | undefined = undefined
  lastWidth: number = window.innerWidth
  constructor(app: any) {
    this.app = app

    this.samples = [
      'images/cockatoo.png',
      'images/snowboarder.jpg',
      'images/car.jpg'
    ]

    this.initThree()
    this.initParticles()
    this.initControls()

    const rnd = 0
    this.goto(rnd)
  }

  initThree() {
    // scene
    this.scene = new THREE.Scene()

    // camera
    this.camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      1,
      10000
    )
    this.camera.position.z = 300
    this.camera.position.x = -40
    this.camera.position.y = 5

    // renderer
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })

    // clock
    this.clock = new THREE.Clock(true)
  }

  initControls() {
    this.interactive = new InteractiveControls(
      this.camera,
      this.renderer.domElement
    )
  }

  initParticles() {
    this.particles = new Particles(this)
    this.scene.add(this.particles.container)
  }

  // ---------------------------------------------------------------------------------------------
  // PUBLIC
  // ---------------------------------------------------------------------------------------------

  update() {
    const delta = this.clock.getDelta()

    if (this.particles) this.particles.update(delta)
  }

  draw() {
    this.renderer.render(this.scene, this.camera)
  }

  goto(index: number) {
    if (this.transitioning) return
    this.transitioning = true

    if (this.currSample === null) {
      this.particles.init(this.samples[index])
      this.currSample = index
      this.transitioning = false
    } else {
      this.particles.hide(true).then(() => {
        this.particles.init(this.samples[index])
        this.currSample = index
        this.transitioning = false
      })
    }
  }

  next() {
    if (this.transitioning) return
    if (this.currSample !== null && this.currSample < this.samples.length - 1)
      this.goto(this.currSample + 1)
    else this.goto(0)
  }

  // ---------------------------------------------------------------------------------------------
  // EVENT HANDLERS
  // ---------------------------------------------------------------------------------------------

  resize() {
    if (!this.renderer) return

    // On mobile, ignore height-only changes caused by browser chrome showing/hiding
    const widthChanged = window.innerWidth !== this.lastWidth
    if (!widthChanged && window.innerWidth < 640) return
    this.lastWidth = window.innerWidth

    const isMobile = window.innerWidth < 640
    this.camera.position.x = isMobile ? 0 : -40
    this.camera.position.y = isMobile ? 40 : 5

    this.camera.aspect = window.innerWidth / window.innerHeight
    this.camera.updateProjectionMatrix()

    this.fovHeight =
      2 *
      Math.tan((this.camera.fov * Math.PI) / 180 / 2) *
      this.camera.position.z

    this.renderer.setSize(window.innerWidth, window.innerHeight)

    if (this.interactive) this.interactive.resize()
    if (this.particles) this.particles.resize()
  }
}
