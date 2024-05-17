import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  phoneInput = new FormGroup({
    phone: new FormControl(''),
  });
  title = 'phone-input';
  constructor(){

  }

  selected(){
    console.log(this.phoneInput.value);

  }
}
