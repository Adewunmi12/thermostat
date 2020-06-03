class Thermostat {
  constructor(){
    this.degrees = 20;
    this.mode1 = "on";
    this.maximum_power_saving_mode = 25;
  }
  degree(number){
    return number
  }
  up(number){
    if(this.degrees + number > this.maximum_power_saving_mode) {
      throw "power saving mode on";
    }
    else{
    this.degrees = this.degrees + number
    return this.degrees;}
  }
  down(number){
    if(this.degrees - number < 10) {
      throw "temperature is too low";
    }
    else{
    this.degrees = this.degrees - number
    return this.degrees;}
  }
  mode(){
    return this.mode1
  }
};