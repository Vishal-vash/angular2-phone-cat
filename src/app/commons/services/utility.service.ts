import { Injectable } from '@angular/core';
import { Phone } from '../Phone';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UtilityService {

  constructor() { }
  buildRow(theArr : any[]){
    var arrOfArr = [];
    for(let i=0; i < theArr.length; i+=4){
      var row = [];
      for(let x=0; x < 4; x++){
        var val = theArr[i+x];
        if(!val){
          break;
        }
        row.push(val)
      }
      arrOfArr.push(row);
    }
   return arrOfArr;
  }

  getPhonesRow(phones : any[]) : Promise<any[]>{
    return Promise.resolve(this.buildRow(phones));
  }
}
