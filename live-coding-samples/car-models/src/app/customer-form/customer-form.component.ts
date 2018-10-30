import { Component, OnInit } from '@angular/core';

interface ICustomer {
  firstName: string;
  lastName: string;
  age: number;
}

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss']
})
export class CustomerFormComponent implements OnInit {

  public customer: ICustomer = {
    firstName: 'Foo',
    lastName: 'Bar',
    age: 42
  };

  constructor() { }

  ngOnInit() {
  }

}
