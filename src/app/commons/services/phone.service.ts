import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Phone } from '../phone';

@Injectable()
export class PhoneService {

  constructor(private http : Http) { }

  private phonesUrl = 'api/phones';
  private phonesDataUrl = 'api/phonesData';
  private handleError(error : any) : Promise<any>{
      console.error('An Error Occured', error); //Using here only for Demo
      return Promise.reject(error.message || error)
  }
  private headers = new Headers({
    'content-type' : 'Application/JSON'
  })

  getPhones() : Observable<Phone[]>{
    return this.http.get(this.phonesUrl)
                .map(response => response.json().data as Phone[])
                .catch(this.handleError);
  }

  getPhone(id : string) : Observable<Phone>{
    return this.http.get(`${this.phonesDataUrl}/${id}`)
                    .map(response => response.json().data as Phone)
                    .catch(this.handleError);
  }
}
