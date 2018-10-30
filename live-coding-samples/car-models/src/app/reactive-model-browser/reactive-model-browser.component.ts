import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, debounceTime, switchMap, startWith } from 'rxjs/operators';
import { FormGroup, FormControl } from '@angular/forms';

interface IModel {
  id: number;
  year: number;
  make: string;
  model: string;
}

@Component({
  selector: 'app-reactive-model-browser',
  templateUrl: './reactive-model-browser.component.html',
  styleUrls: ['./reactive-model-browser.component.scss']
})
export class ReactiveModelBrowserComponent implements OnInit {
  public filterForm = new FormGroup({
    makeFilter: new FormControl()
  });

  public models: Observable<IModel[]>;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.models = this.filterForm.get('makeFilter').valueChanges.pipe(
      startWith(''),
      debounceTime(500),
      switchMap(val => this.httpClient.get<IModel[]>(
        `https://vehicle-data.azurewebsites.net/api/models?make=${val}`))
    );
  }
}
