class ExternalData {
  constructor(element) {
    this.element = element
    this.endpoint = $(element).data("endpoint")
  }

  activate() {
    let external_data = this
    $(this.element).on("click", function(event) {
      event.preventDefault()
      external_data.fetch
    })
  }

  get fetch() {
    let external_data = this
    $.get( this.endpoint, function(data) {
      $(".title").html(data.title)
      $(".description").html(data.description)
    })
  }
}
