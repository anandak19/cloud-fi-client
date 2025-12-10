import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IListUserRouter } from '../../models/routers.model';
import { IRouterCashData } from '../../models/userRouters.model';

@Injectable({
  providedIn: 'root',
})
export class RoutersService {
  private API_ENDPOINT = 'router';
  private _http = inject(HttpClient);
  getUsersRouters() {
    return this._http.get<IListUserRouter[]>(this.API_ENDPOINT);
  }

  getRouterCashData(routerId: string) {
    return this._http.get<IRouterCashData>(
      `${this.API_ENDPOINT}/${routerId}/cash`
    );
  }

  getRouterVouchers() {
    return 'ho';
  }
}
