import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

export class AddCalculator {
  public add(x: number, y: number): number {
    return x + y;
  }
}

@Component({
  selector: 'app-adding',
  templateUrl: './adding.component.html',
  styleUrls: ['./adding.component.css']
})
export class AddingComponent implements OnInit, OnChanges {
  @Input() public parameter1 = 21;
  @Input() public parameter2 = 21;
  public result: number;
  @Output() public calculated = new EventEmitter<number>();

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngOnInit() {}

  calculate(calculator?: AddCalculator) {
    if (calculator) {
      this.result = calculator.add(this.parameter1, this.parameter2);
    } else {
      this.result = this.parameter1 + this.parameter2;
    }
    this.calculated.emit(this.result);
  }
}
