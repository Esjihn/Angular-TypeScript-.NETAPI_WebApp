import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import buildQuery from 'odata-query';
import { switchMap, shareReplay } from 'rxjs/operators';
import { AutoPart } from "../../assets/AutoPart";

@Injectable({
  providedIn: 'root'
})
export class AutoWarehouseServiceService {
  warehouseServiceUrl: string = 'https://localhost:5001/';

  constructor(private http: HttpClient) {

  }

  getAutoParts() {
    const route = 'AutoWareHouse';
    return this.http.get<AutoPart[]>(this.warehouseServiceUrl + route);
  }
}
