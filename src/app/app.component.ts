import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Eventbinding';

  // Event binding lets you listen for and respond to user actions such as keystrokes, mouse movements, clicks, and touches.
  // which will invoke a method so we can bind the method response using event such as keystrokes, mouse movements, clicks, and touches


  //method/function
clicking = 0;
  clickCount () {
    return this.clicking++;
  }

  clickAlert() {
    alert("u clicked");  //if we use console.log then in broswer console we can see 
  }

  clickAlertCount() {
    this.clickCount();  // this will first invoke the method so increament will happen
    alert("You clicked "+ this.clicking); // now as increament is done the click count starts from 1 instead of 0
  }
}





