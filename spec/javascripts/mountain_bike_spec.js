describe("MountainBike", function() {
  describe("a custom mountain bike", function() {
    it("has custom size, chain, tires, and shocks", function() {
      let bike = new MountainBike({size: "large",
        chain: "12-speed",
        tire_size: "26",
        front_shock: "Front",
        rear_shock: "Rear"})
      expect(bike.size).toEqual("large")
      expect(bike.chain).toEqual("12-speed")
      expect(bike.tire_size).toEqual("26")
      expect(bike.front_shock).toEqual("Front")
      expect(bike.rear_shock).toEqual("Rear")
    })
  })

  describe("a default mountain bike", function() {
    it("has custom size and shocks", function() {
      let bike = new MountainBike({size: "large", front_shock: "Front", rear_shock: "Rear"})
      expect(bike.size).toEqual("large")
      expect(bike.chain).toEqual("10-speed")
      expect(bike.tire_size).toEqual("2.1")
      expect(bike.front_shock).toEqual("Front")
      expect(bike.rear_shock).toEqual("Rear")
    })
  })

  describe("spares", function() {
    it("carries a spare tire, chain, and a rear shock", function() {
      let bike = new MountainBike({size: "large", rear_shock: "Rear"})
      expect(bike.spares.tire_size).toEqual("2.1")
      expect(bike.spares.chain).toEqual("10-speed")
      expect(bike.spares.rear_shock).toEqual("Rear")
    })
  })
})
