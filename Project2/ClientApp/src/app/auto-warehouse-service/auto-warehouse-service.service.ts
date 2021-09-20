import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import buildQuery from 'odata-query';
import { switchMap, shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AutoWarehouseServiceService {

  constructor(private http: HttpClient) {

  }
}
