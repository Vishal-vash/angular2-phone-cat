import { Component, OnInit } from '@angular/core';
import { PhoneService } from '../commons/services/phone.service';
import { Phone } from '../commons/phone';

@Component({
  selector: 'app-phone-list',
  templateUrl: './phone-list.component.html',
  styleUrls: ['./phone-list.component.css'],
  providers : [PhoneService]
})
export class PhoneListComponent implements OnInit {

  constructor(private phoneService : PhoneService) {
      // Do Something
   }
  selectedPhone : Phone;
  phones;

  onSelectPhone(phone){
    this.selectedPhone = phone;
  }

  getPhones(){
    this.phoneService.getPhones().subscribe(phones => this.phones = phones);
  }

  ngOnInit() {
    this.getPhones()
  }


}
