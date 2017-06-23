describe("External data", function() {
  let element = "<button type=\"button\" data-endpoint=\"endpoint\">Click to load</button>"
  let source = new ExternalData(element)

  describe("constructor", function() {
    it("takes an endpoint", function() {
      expect(source.endpoint).toEqual("endpoint")
    })
  })

  describe("display_results", function() {
    beforeEach(function() {
      setFixtures("<span class=\"title\">remove</span><span class=\"description\">remove</span>")
    })

    describe("with a valid dataset", function() {
      it("replaces the text with the data", function() {
        let data = { title: "Title", description: "Description" }
        source.display_results(data)
        expect($(".title").text()).toBe("Title")
        expect($(".description").text()).toBe("Description")
      })
    })

    describe("with an invalid dataset", function() {
      it("sets the text to be empty", function() {
        let data = { foo: "Bar" }
        source.display_results(data)
        expect($(".title").text()).toBe("")
        expect($(".description").text()).toBe("")
      })
    })

    describe("with an undefined dataset", function() {
      it("sets the text to be empty", function() {
        source.display_results()
        expect($(".title").text()).toBe("")
        expect($(".description").text()).toBe("")
      })
    })
  })

  describe("retrieving the response", function() {
    beforeEach(function() {
      jasmine.Ajax.install()
    })

    afterEach(function() {
      jasmine.Ajax.uninstall()
    })

    describe("a successful response", function() {
      beforeEach(function() {
        jasmine.Ajax.stubRequest("endpoint").andReturn({
          status: 200,
          statusText: "HTTP/1.1 200 OK",
          contentType: "text/json",
          responseText: "json data"
        })
        source.decorate()
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
})
