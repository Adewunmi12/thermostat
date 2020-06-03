describe("Thermostat", function(){
  var thermostat;
beforeEach(function(){
  thermostat = new Thermostat();
});

it("starts at 20 degrees", function(){
  expect(thermostat.degree(20)).toEqual(20);
});

it("increase the tempreature with an up function", function(){
  expect(thermostat.up(10)).toEqual(30)
});

it("decreases the tempreature with an down function", function(){
  expect(thermostat.down(5)).toEqual(15)
});

it("minimum tempreature is 10 degrees", function(){
  expect(function(){thermostat.down(15);}).toThrow("temperature is too low")
});

it("maximum temperature is 25 degrees if power saving mode is on", function(){
  expect(thermostat.mode()).toEqual("on")
});
});