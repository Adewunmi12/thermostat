class Thermostat {
  constructor(){
    this.degrees = 20;
    this.mode_on = true;
    this.maximum_power_saving_mode = 25;
    this.no_power_saving_mode = 32;
  }
  degree(number){
    return number
  }
  up(number){
    this.degrees = this.degrees + number
    if(this.mode_on == true && this.degrees > this.maximum_power_saving_mode){
      throw "when power saving mode is on max temperature is 25 degrees";
    }
    else if(this.mode_on == false && this.degrees > this.no_power_saving_mode){
      throw "when power saving mode is off max temperature is 32 degrees";
    }
    else {
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

  _mode_is_now_off(){
    return this.mode_on === false;
  }
}
