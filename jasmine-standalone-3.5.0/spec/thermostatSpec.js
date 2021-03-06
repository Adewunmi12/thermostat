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
  expect(function(){thermostat.up(6);}).toThrow("when power saving mode is on max temperature is 25 degrees")
});

it ('turns the power mode off', function(){
  expect(thermostat._mode_is_now_off()).toBe(false);
});

it("maximum temperature is 32 degrees if power saving mode is off", function(){
  expect(function(){thermostat.up(13);}).toThrow("when power saving mode is off max temperature is 32 degrees")
});

// it("power saving mode is on", function(){
//   expect(thermostat.mode()).toEqual(true)
// });
});
