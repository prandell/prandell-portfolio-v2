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
  currSample: number = 0
  fovHeight: number | null = null
  constructor(app: any) {
    this.app = app

    this.samples = [
      'images/snowboarder.jpg',
      'images/cockatoo.png',
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
    // init next
    if (this.currSample == null) this.particles.init(this.samples[index])
    // hide curr then init next
    else {
      this.particles.hide(true).then(() => {
        this.particles.init(this.samples[index])
      })
    }

    this.currSample = index
  }

  next() {
    if (this.currSample !== null && this.currSample < this.samples.length - 1)
      this.goto(this.currSample + 1)
    else this.goto(0)
  }

  // ---------------------------------------------------------------------------------------------
  // EVENT HANDLERS
  // ---------------------------------------------------------------------------------------------

  resize() {
    if (!this.renderer) return
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
