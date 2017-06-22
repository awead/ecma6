class AbstractDecorator {
  constructor(element) {
    this.element = element
  }

  activate() {
    let $this = this
    $(this.element).on("click", function(event) {
      event.preventDefault()
      $this.decorate(this)
    })
  }

  decorate () {
    throw TypeError("You must define a decoration in your subclass")
  }
}
