describe("RoadBike", function() {
  describe("a custom roadbike", function() {
    it("has custom size, chain, tires, and tape color", function() {
      let bike = new RoadBike({size: "large", chain: "12-speed", tire_size: "26", tape_color: "green"})
      expect(bike.size).toEqual("large")
      expect(bike.chain).toEqual("12-speed")
      expect(bike.tire_size).toEqual("26")
      expect(bike.tape_color).toEqual("green")
    })
  })

  describe("a default roadbike", function() {
    it("has custom size only", function() {
      let bike = new RoadBike({size: "large"})
      expect(bike.size).toEqual("large")
      expect(bike.chain).toEqual("10-speed")
      expect(bike.tire_size).toEqual("23")
      expect(bike.tape_color).toEqual("black")
    })
  })

  describe("spares", function() {
    it("carries a spare tire, chain, and tape", function() {
      let bike = new RoadBike({size: "large"})
      expect(bike.spares.tire_size).toEqual("23")
      expect(bike.spares.chain).toEqual("10-speed")
      expect(bike.spares.tape_color).toEqual("black")
    })
  })
})
