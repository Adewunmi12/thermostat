class Thermostat {
  constructor(){
    this.degrees = 20;
    this.mode1 = "on";
    this.maximum_power_saving_mode = 25;
    this.no_power_saving_mode = 32;
  }
  degree(number){
    return number
  }
  up(number){
    this.degrees = this.degrees + number
    if(this.mode1 && this.degrees > this.maximum_power_saving_mode){
      throw "when power saving mode is on max tempreature is 25 degrees"
    }
    else if(this.mode1 = "off" && this.degrees > this.no_power_saving_mode){
      throw "when power saving mode is off max tempreature is 32 degrees"
    }
    else{
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
    if(this.degrees < this.maximum_power_saving_mode)
    return this.degrees
      }
  };