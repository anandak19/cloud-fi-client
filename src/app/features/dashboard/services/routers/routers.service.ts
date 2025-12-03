import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IListUserRouter } from '../../models/routers.model';

@Injectable({
  providedIn: 'root',
})
export class RoutersService {
  private API_ENDPOINT = 'router';
  private _http = inject(HttpClient);
  getUsersRouters() {
    return this._http.get<IListUserRouter[]>(this.API_ENDPOINT);
  }

  getRouterSales() {
    return 'ys';
  }

  getRouterVouchers() {
    return 'ho';
  }
}
