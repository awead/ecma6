describe("An abstract decorator", function() {
  let abstract_decorator = new AbstractDecorator("element")

  it("implements element", function() {
    expect(abstract_decorator.element).toBe("element")
  })

  it("requires decorate", function() {
    expect( () => abstract_decorator.decorate() )
      .toThrow(new TypeError("You must define a decoration in your subclass"))
  })
})
