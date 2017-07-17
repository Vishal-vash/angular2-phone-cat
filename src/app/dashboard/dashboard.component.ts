import { Component, OnInit } from '@angular/core';
import { PhoneService } from '../commons/services/phone.service';
import { UtilityService } from '../commons/services/utility.service';
import { Phone } from '../commons/phone';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [PhoneService,UtilityService]
})
export class DashboardComponent implements OnInit {

  constructor(
    private phoneService : PhoneService,
    private utilityService : UtilityService
    ) { }
  private arrayPhones : any[];
  private phones : Phone[];
  
  getPhones(){
    this.phoneService.getPhones()
                      .subscribe(phones => {
                        this.phones = phones;
                        this.utilityService.getPhonesRow(this.phones)
                                            .then(response => this.arrayPhones = response);
                      });
  }

  ngOnInit() {
    this.getPhones();
  }

}
