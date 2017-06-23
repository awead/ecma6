class ExternalData extends AbstractDecorator {
  constructor(element) {
    super(element)
    this.endpoint = $(element).data("endpoint")
  }

  decorate() {
    this._ajaxGet(this.endpoint)
      .then(data => { this.success(data) })
      .catch(error => { this.fail(error) })
  }

  success(data) {
    $(".status").text("Data loaded")
    this.display_results(JSON.parse(data))
  }

  fail(error) {
    // we can do something with error if we want to, or not
    $(".status").text("Unable to load data")
    this.display_results()
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

  // Taken from http://ccoenraets.github.io/es6-tutorial-data/promisify/
  // TODO: extract to a module with its own tests
  _ajaxGet(url) {
    return new Promise(function(resolve, reject) {
      let req = new XMLHttpRequest()
      req.open("GET", url)
      req.onload = function() {
        if (req.status === 200) {
          resolve(req.response)
        }
        else {
          reject(req.statusText)
        }
      }

      req.onerror = function() {
        reject("Network error")
      }

      req.send()
    })
  }
}
