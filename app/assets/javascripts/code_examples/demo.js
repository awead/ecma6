class Demo {

  static get class_get_method() {
    return "I am a class method with get"
  }

  static class_function_method() {
    return "I am a class method without get"
  }

  set special_case(value) {
    this.stored_value = value
  }

  get special_case() {
    return `changed ${this.stored_value}`
  }

  static set special_case(value) {
    this.stored_value = value
  }

  static get special_case() {
    return `changed ${this.stored_value}`
  }

}
