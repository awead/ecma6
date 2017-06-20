class Bicycle {
  constructor(arg) {
    this.size = arg.size

    if ( arg.chain === undefined ) {
      this.chain = this.default_chain
    }
    else {
      this.chain = arg.chain
    }

    if ( arg.tire_size === undefined ) {
      this.tire_size = this.default_tire_size
    }
    else {
      this.tire_size = arg.tire_size
    }
  }

  // Use get for methods that only return something. This enables you do to:
  //   > object.spares
  // Without the get, you have to call it like a normal function:
  //   > object.spares()
  get spares() {
    return new Object({tire_size: this.tire_size, chain: this.chain})
  }

  get default_chain() {
    return "10-speed"
  }

  get default_tire_size() {
    throw TypeError("Provide explicit default_tire_size or implement in subclass")
  }

}
