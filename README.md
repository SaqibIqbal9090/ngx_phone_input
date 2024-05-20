# NgxPhoneNumberInput

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.0.
NgxPhoneNumberInput is an Angular library for easy integration of phone number input fields in your Angular applications.



# Installation
To install NgxPhoneNumberInput in your Angular project, you can use npm:

```sh
$ npm install ngx-phone-number-input

```

# Dependencies

This library requires the following additional dependencies:

country-list-json
primeng
You can install them using npm:

```sh
$ npm install country-list-json
$ npm install primeng
```

# Style.css

The library includes styles based on PrimeNG's md-light-indigo theme. You can import it in your styles.css file:

```cs
@import 'primeng/resources/themes/md-light-indigo/theme.css';
```


# Usage
### Import 
1. Import the NgxPhoneNumberInputModule into your Angular module:

```ts
import { NgxPhoneNumberInputModule } from 'ngx-phone-number-input';

@NgModule({
  imports: [
    // ... other imports
    NgxPhoneNumberInputModule
  ],
  // ...
})
export class AppModule { }

```
2. In your component template, use the ngx-phone-input component within a reactive form:
```ts
<form [formGroup]="phoneInputForm">
  <ngx-phone-input formControlName="phone"></ngx-phone-input>
</form>
```


## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

# License
This library is licensed under the MIT License.
