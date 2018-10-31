import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  numbers = [1, 2, 3, 4, 5];

  constructor() {}

  ngOnInit() {}

  increment() {
    for (let i = 0; i < this.numbers.length; i++) {
      this.numbers[i]++;
    }
  }

  onCalculationFinished(result: number) {
    console.log(`Calculation finished, the result is ${result}!`);
  }
}
