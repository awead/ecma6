describe("Decorator", function() {
  describe("constructor", function() {
    it("takes a dom element", function() {
      let decorator = new Decorator("element")
      expect(decorator.element).toEqual("element")
    })
  })

  describe("activate", function() {
    beforeEach(function() {
      setFixtures("sample <a class=\"selector\">clickable</a> text")
      $(".selector").each(function() {
        new Decorator(this)
      })
    })

    it("appends an emoji to the selector once", function() {
      $(".selector").trigger("click")
      expect($(".selector").text()).toEqual("clickable😄")
    })

    it("appends an emoji each time the selector is clicked", function() {
      $(".selector").trigger("click")
      $(".selector").trigger("click")
      expect($(".selector").text()).toEqual("clickable😄😄")
    })
  })
})
