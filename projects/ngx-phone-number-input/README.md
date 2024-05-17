# NgxPhoneNumberInput

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.0.
NgxPhoneNumberInput is an Angular library for easy integration of phone number input fields in your Angular applications.



# Installation
To install NgxPhoneNumberInput in your Angular project, you can use npm:

npm install ngx-phone-number-input

# Dependencies

npm install country-list-json
npm install primeng

# Style.css

@import 'primeng/resources/themes/md-light-indigo/theme.css';


# Usage
Once installed, you can import the NgxPhoneNumberInputModule into your Angular module:
Import 
import { NgxPhoneNumberInputModule } from 'ngx-phone-number-input';

<form [formGroup]="phoneInputForm">
  <ngx-phone-input formControlName="phone"></ngx-phone-input>
</form>


## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

# License
This library is licensed under the MIT License.
