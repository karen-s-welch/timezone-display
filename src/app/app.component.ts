import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //Date is a built-in Angular object that brings in current time info
  //new Date creates a copy of the object, set to variable time
  //CST is the default time zone here
  // time = null;
  time = new Date();
  //variable to keep track of previous value of timezone
  temptime = null;

  getZoneTime(timezone){
    // This redefines the time container to a new instance of an object
    this.time = new Date();
    if (timezone === 'CST') {
      this.time.setHours(this.time.getHours())
    }else if (timezone === 'PST') {
      this.time.setHours(this.time.getHours() - 2)
    }else if (timezone === 'MST') {
      this.time.setHours(this.time.getHours() - 1)
    }else if (timezone === 'EST') {
      this.time.setHours(this.time.getHours() + 1)
    }this.temptime = timezone;
  }
  clear(){
    this.time = null;
    this.temptime = null;
  }
}
