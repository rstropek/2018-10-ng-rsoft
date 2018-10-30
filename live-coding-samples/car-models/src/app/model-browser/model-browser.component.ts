import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { first, catchError, filter, map, tap } from 'rxjs/operators';
import { Observable, throwError, from } from 'rxjs';

interface IModel {
  id: number;
  year: number;
  make: string;
  model: string;
}

@Component({
  selector: 'app-model-browser',
  templateUrl: './model-browser.component.html',
  styleUrls: ['./model-browser.component.scss']
})
export class ModelBrowserComponent implements OnInit {
  public displayedColumns: string[] = ['id', 'year', 'make', 'model'];

  public makeFilter = '';
  public models: Observable<IModel[]>;
  public baseQuery: Observable<IModel[]>;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.baseQuery = this.httpClient.get<IModel[]>(
      'http://localhost:8082/api/models');
    this.refresh();
  }

  /**
   * Refreshes the list of models
   * @param mFilter Optional filter for models (includes)
   */
  public refresh(mFilter: string = '') {
    this.models = this.baseQuery.pipe(
      map(models => models.filter(m => m.make.includes(mFilter)))
    );
  }

  public onRowClick(model: IModel) {
    console.dir(model);
  }
}
