class RoadBike extends Bicycle {
  constructor(arg) {
    super(arg)
    this.tape_color = arg.tape_color || this.default_tape_color
  }

  get spares() {
    return Object.assign(super.spares, {tape_color: this.tape_color})
  }

  get default_tire_size() {
    return "23"
  }

  get default_tape_color() {
    return "black"
  }

}
