import { CreateBookingComponent } from './../../../bookings/create-booking/create-booking.component';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { Place } from '../../place.model';
import { PlacesService } from '../../places.service';

@Component({
  selector: 'app-place-details',
  templateUrl: './place-details.page.html',
  styleUrls: ['./place-details.page.scss'],
})
export class PlaceDetailsPage implements OnInit {
  currentPlace: Place;

  constructor(
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private placesService: PlacesService,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((paramsMap) => {
      this.currentPlace = this.placesService.getPlace(paramsMap.get('placeId'));
    });
  }

  onBook() {
    this.modalCtrl
      .create({
        component: CreateBookingComponent,
        componentProps: {selectedPlace: this.currentPlace}
      })
      .then(
        (modalEl) => {
          modalEl.present();
          return modalEl.onDidDismiss();
        }).then(
          resultData => {
            console.log(resultData.data, resultData.role);
            if (resultData.role === 'confirm') {
              console.log('BOOKED!');
            } else if (resultData.role === 'cancel'){
              console.log('CANCELED');
            }
          }
        );
  }
}
