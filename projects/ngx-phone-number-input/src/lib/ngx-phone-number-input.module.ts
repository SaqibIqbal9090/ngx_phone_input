import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhoneInputComponent } from './phone-input/phone-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';


@NgModule({
  declarations: [PhoneInputComponent],
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    IconFieldModule,
    InputIconModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  exports:[
    PhoneInputComponent
  ]
})
export class NgxPhoneNumberInputModule { }
