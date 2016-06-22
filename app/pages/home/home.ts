import {Component} from '@angular/core';
import {NavController, Alert} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  constructor(private nav: NavController) {

  }

  openAlert() {
    let alert = Alert.create({
      title: "Hello",
      message: "It's me",
      inputs: [
        {
          type: "text"
        }
      ],
      buttons: [
        {
          text: "Cancel"
        },
        {
          text: "Confirm",
          handler: () => {

          }
        }
      ]
    });

    this.nav.present(alert);
  }
}
