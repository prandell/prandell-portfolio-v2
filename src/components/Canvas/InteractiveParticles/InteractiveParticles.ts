import WebGLView from './WebGLView'

export default class InteractiveParticles {
  webgl: WebGLView | undefined = undefined
  handlerAnimate: any | undefined = undefined
  raf: number | undefined = undefined
  constructor() {}

  init() {
    this.initWebGL()
    this.addListeners()
    this.animate()
    this.resize()
  }

  initWebGL() {
    this.webgl = new WebGLView(this)
    document
      .querySelector('.hero-container')
      ?.appendChild(this.webgl.renderer.domElement)
  }

  addListeners() {
    this.handlerAnimate = this.animate.bind(this)

    window.addEventListener('resize', this.resize.bind(this))

    const el = this.webgl?.renderer.domElement
    el.addEventListener('click', this.click.bind(this))
  }

  animate() {
    this.update()
    this.draw()

    this.raf = requestAnimationFrame(this.handlerAnimate)
  }

  // ---------------------------------------------------------------------------------------------
  // PUBLIC
  // ---------------------------------------------------------------------------------------------

  update() {
    if (this.webgl) this.webgl.update()
  }

  draw() {
    if (this.webgl) this.webgl.draw()
  }

  // ---------------------------------------------------------------------------------------------
  // EVENT HANDLERS
  // ---------------------------------------------------------------------------------------------

  resize() {
    if (this.webgl) this.webgl.resize()
  }

  click() {
    this.webgl?.next()
  }
}
