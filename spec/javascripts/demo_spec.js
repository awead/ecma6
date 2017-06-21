describe("A demo object", function() {
  it("has class get-style methods", function() {
    expect(Demo.class_get_method).toEqual("I am a class method with get")
  })

  it("has class function-style methods", function() {
    expect(Demo.class_function_method()).toEqual("I am a class method without get")
  })

  it("has implicit getters and setters", function() {
    let demo = new Demo()
    demo.random_method_name = "a value"
    expect(demo.random_method_name).toEqual("a value")
  })

  it("has implicit class-level getters and setters", function() {
    Demo.random_method_name = "a value"
    expect(Demo.random_method_name).toEqual("a value")
  })

  it("has explicit getters and setters", function() {
    let demo = new Demo()
    demo.special_case = "input"
    expect(demo.special_case).toEqual("changed input")
  })

  it("has explicit class-level getters and setters", function() {
    Demo.special_case = "input"
    expect(Demo.special_case).toEqual("changed input")
  })
})
