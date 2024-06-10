class MyFramework {
  constructor(options) {
    this.options = options;
    this.init();
  }

  init() {
    if (this.options.el) {
      this.mount(this.options.el);
    }
  }

  mount(selector) {
    this.el = document.querySelector(selector);
    this.render();
  }

  render() {
    if (this.options.render) {
      this.el.innerHTML = this.options.render();
    }
  }
}

export default MyFramework;
