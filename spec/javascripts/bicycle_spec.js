describe("Bicycle", function() {
  describe("a custom bike", function() {
    it("has a size, chain, and tires", function() {
      let bike = new Bicycle({size: "small", chain: "3-speed", tire_size: "large"})
      expect(bike.size).toEqual("small")
      expect(bike.chain).toEqual("3-speed")
      expect(bike.tire_size).toEqual("large")
    });
  });

  describe("a default bike", function() {
    it("has a size, tires, and a default chain", function() {
      let bike = new Bicycle({size: "small", tire_size: "large"})
      expect(bike.size).toEqual("small")
      expect(bike.chain).toEqual("10-speed")
      expect(bike.tire_size).toEqual("large")
    });
  });

  describe("an insufficient bike", function() {
    it("reports a TypeError", function() {
      expect( function() { new Bicycle({size: "small"}) } )
        .toThrow(new TypeError("Provide explicit default_tire_size or implement in subclass"))
    });
  });

  describe("spares", function() {
    it("carries a spare tire and chain", function() {
      let bike = new Bicycle({size: "small", tire_size: "large"})
      expect(bike.spares.tire_size).toEqual("large")
      expect(bike.spares.chain).toEqual("10-speed")
    });
  });
});
