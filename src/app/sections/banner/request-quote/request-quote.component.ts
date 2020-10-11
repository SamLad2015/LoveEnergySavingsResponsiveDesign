import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-request-quote',
  templateUrl: './request-quote.component.html',
  styleUrls: ['./request-quote.component.scss']
})
export class RequestQuoteComponent implements OnInit {
  requestFormGroup: any;

  constructor() { }
  get name(): FormControl {
    return this.requestFormGroup.get('name');
  }
  get phone(): FormControl {
    return this.requestFormGroup.get('phone');
  }
  get email(): FormControl {
    return this.requestFormGroup.get('email');
  }
  ngOnInit(): void {
    this.requestFormGroup = new FormGroup({
      name: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  submitForm = () => {
    console.log(this.requestFormGroup.value);
  }

  isTouchedAndInvalid = (field: FormControl) => {
   return (field.dirty || field.touched) && field.invalid && field.errors;
  }
}
