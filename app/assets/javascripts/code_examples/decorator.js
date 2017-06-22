class Decorator {
  constructor(element) {
    this.element = element
  }

  activate() {
    $(this.element).on("click", function(event) {
      event.preventDefault()
      $(this).append(String.fromCharCode(0xD83D, 0xDE04))
    })
  }

}
