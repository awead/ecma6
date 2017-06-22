class ExternalData extends AbstractDecorator {
  constructor(element) {
    super(element)
    this.endpoint = $(element).data("endpoint")
  }

  decorate() {
    $.get( this.endpoint, function(data) {
      $(".title").html(data.title)
      $(".description").html(data.description)
    })
  }
}
