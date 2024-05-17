import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  forwardRef,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { CountryListItemType, countries } from 'country-list-json';

@Component({
  selector: 'ngx-lib-phone-input',
  templateUrl: './phone-input.component.html',
  styleUrls: ['./phone-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PhoneInputComponent),
      multi: true,
    },
  ],
})
export class PhoneInputComponent
  implements ControlValueAccessor, AfterViewInit
{
  phone!: FormControl;
  countriesWithCodes: CountryListItemType[] = [];
  selectedCountry: any = {};
  showOptions: boolean = false;

  constructor(private elementRef: ElementRef) {
    this.phone = new FormControl(); // Initialize FormControl

    this.countriesWithCodes = countries;
    this.selectedCountry = this.countriesWithCodes[0];
  }

  propagateChange: any = () => {};

  ngAfterViewInit(): void {
    if (this.selectedCountry) {
      setTimeout(() => {
        this.setValue();
      });
    }

    this.phone.valueChanges.subscribe((value) => {
      this.propagateChange(value);
    });
  }

  setValue() {
    this.phone.setValue(this.selectedCountry.dial_code);
  }

  writeValue(value: any): void {
    this.phone.setValue(value);
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {}

  showDropdown() {
    this.showOptions = !this.showOptions;
  }

  @HostListener('document:click', ['$event'])
  onClick(event: Event) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.showOptions = false;
    }
  }

  countrySelect(country: CountryListItemType) {
    this.selectedCountry = country;
    this.phone.setValue(this.selectedCountry.dial_code);
    this.showOptions = false;
    this.propagateChange(this.selectedCountry?.dial_code);
  }
}
