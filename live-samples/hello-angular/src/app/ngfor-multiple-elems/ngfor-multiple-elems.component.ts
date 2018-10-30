import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor-multiple-elems',
  templateUrl: './ngfor-multiple-elems.component.html',
  styleUrls: ['./ngfor-multiple-elems.component.css']
})
export class NgforMultipleElemsComponent implements OnInit {

  public persons: any = [
    { fn: 'Foo', ln: 'Bar' },
    { fn: 'John', ln: 'Doe' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
