describe("External data", function() {
  let element = "<button type=\"button\" data-endpoint=\"endpoint\">Click to load</button>"
  let source = new ExternalData(element)

  describe("constructor", function() {
    it("takes an endpoint", function() {
      expect(source.endpoint).toEqual("endpoint")
    })
  })

  describe("retrieving the response", function() {
    beforeEach(function() {
      jasmine.Ajax.install()

      jasmine.Ajax.stubRequest("endpoint").andReturn({
        status: 200,
        statusText: "HTTP/1.1 200 OK",
        contentType: "text/json",
        responseText: "json data"
      })

      source.decorate()
    })

    afterEach(function() {
      jasmine.Ajax.uninstall()
    })

    it("fetches the data from the endpoint", function() {
      let request = jasmine.Ajax.requests.mostRecent()
      expect(request.url).toBe("endpoint")
      expect(request.method).toBe("GET")
      expect(request.status).toBe(200)
      expect(request.responseText).toBe("json data")
    })
  })
})
