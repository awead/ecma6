class MountainBike extends Bicycle {
  constructor(arg) {
    super(arg)

    this.front_shock = arg.front_shock
    this.rear_shock = arg.rear_shock
  }

  get spares() {
    return Object.assign(super.spares, {rear_shock: this.rear_shock})
  }

  get default_tire_size() {
    return "2.1"
  }

}
