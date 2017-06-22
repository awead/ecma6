class Decorator extends AbstractDecorator {
  decorate(dom_element) {
    $(dom_element).append(String.fromCharCode(0xD83D, 0xDE04))
  }
}
