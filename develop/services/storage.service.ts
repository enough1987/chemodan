
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';


@Injectable()
export class StorageService {

  public data = [];

  constructor(private http: Http) {}

  getFormServer(){
    return this.http.get('http://mixchemodan.ru/api/landing?token=guest')
          .map(res => {
            let data = res.json();
            //console.log('getFormServer() got from http://mixchemodan.ru/api/landing?token=guest - ', data);

            return data || { };
          })
          .catch(error => { console.error(error) });
  }
  bookingServer(cart, buyer){
    var body = "cart=" + JSON.stringify(cart) + "&buyer=" + JSON.stringify(buyer);
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.post('http://mixchemodan.ru/api/cart?token=guest',
      body, {
        headers: headers
      })
          .map(res => {
            let data = res.json();
            //console.log('bookingServer() got from http://mixchemodan.ru/api/cart?token=guest - ', data);
            return data || { };
          })
          .catch(error => { console.error(error) });
  }
  callbackServer(buyer){
    var body = "buyer=" + JSON.stringify(buyer);
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.post('http://mixchemodan.ru/api/cart?token=guest',
      body, {
        headers: headers
      })
          .map(res => {
            let data = res.json();
            //console.log('bookingServer() got from http://mixchemodan.ru/api/cart?token=guest - ', data);
            return data || { };
          })
          .catch(error => { console.error(error) });
  }
  addItem(item){
    this.data = [...this.data, item];
  }


}
