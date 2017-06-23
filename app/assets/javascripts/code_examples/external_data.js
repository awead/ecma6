class ExternalData extends AbstractDecorator {
  constructor(element) {
    super(element)
    this.endpoint = $(element).data("endpoint")
  }

  decorate() {
    let $this = this
    $.get(this.endpoint, function(data) {
      $(".status").text("Data loaded")
      $this.display_results(data)
    }).fail(function() {
      $(".status").text("Unable to load data")
      $this.display_results()
    })
  }

  display_results(data) {
    if (typeof(data) == "undefined" || typeof(data.title) == "undefined" || typeof(data.description) == "undefined") {
      $(".title").html("")
      $(".description").html("")
    }
    else {
      $(".title").html(data.title)
      $(".description").html(data.description)
    }
  }
}
