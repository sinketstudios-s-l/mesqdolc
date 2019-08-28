import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { LoadingController } from '@ionic/angular';

declare var google;

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.page.html',
  styleUrls: ['./informacion.page.scss'],
})
export class InformacionPage implements OnInit {

  mapRef = null;

  constructor(
    private geolocation: Geolocation,
    private loadingCtrl: LoadingController
  ) { 

  }


  ngOnInit() {
    this.loadMap();
  }


  async loadMap() {

    const loading = await this.loadingCtrl.create();
    const myLatLng = await this.getLocation();
    const mapEle: HTMLElement = document.getElementById('map');
    this.mapRef = new google.maps.Map(mapEle, {
     center: myLatLng,
     zoom: 12
    });
    google.maps.event
    .addListenerOnce(this.mapRef, 'idle', () => {
      this.addMarket (myLatLng.lat, myLatLng.lng);

    });
  }

  private addMarket(lat: number, lng: number) {
      const marker = new google.maps.Marker({
        position: { lat, lng },
        map: this.mapRef,
        tittle: 'MesQDolç'
      });
  }

   private async getLocation () {
    const rta = await this.geolocation.getCurrentPosition();
    return {
      lat: rta.coords.latitude,
      lng: rta.coords.longitude
    };
   }

}
