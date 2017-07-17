import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PhoneService } from '../commons/services/phone.service';
//import 'rxjs/add/operator/switchMap';
import { Phone } from '../commons/phone';


@Component({
  selector: 'app-phone-details',
  templateUrl: './phone-details.component.html',
  styleUrls: ['./phone-details.component.css']
})
export class PhoneDetailsComponent implements OnInit {

  constructor(
    private phoneService: PhoneService,
    private route: ActivatedRoute,
    private location: Location,
  ) { }

  selectedPhone: Phone;
  isAvailabality: boolean;
  selectedImage: string;

  selectImage(image){
    this.selectedImage = image;
  }
  ngOnInit() {
    // this.route.params
    //   .switchMap((params : Params) => this.phoneService.getPhone(params['id']))
    //   .subscribe(phone => this.selectedPhone = phone);
    //---------------OR -------------------------//
    let id = this.route.snapshot.params['id'];
    this.phoneService.getPhone(id)
      .subscribe(phone => {
        this.selectedPhone = phone;
        this.isAvailabality = (this.selectedPhone['availability'] == "") ? false : true;
        this.selectedImage = this.selectedPhone['images'][0];
      });
  }

  goBack() {
    return this.location.back();
  }

}
