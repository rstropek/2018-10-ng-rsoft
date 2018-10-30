import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-customer-form',
  templateUrl: './reactive-customer-form.component.html',
  styleUrls: ['./reactive-customer-form.component.scss']
})
export class ReactiveCustomerFormComponent implements OnInit {

  public customerFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.customerFormGroup = this.formBuilder.group({
      firstName: ['Foo', [Validators.required, Validators.minLength(5)]],
      lastName: ['Bar'],
      age: [42]
    });
  }

  public onSave() {
    console.log(this.customerFormGroup.get);
  }
}
