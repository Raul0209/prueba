import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UiServiceService {

  constructor(private alertController: AlertController) { }

  async informativeAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Error :(',
      message,
      buttons: ['OK']
    });

    await alert.present();
  }

  async soporteToken(message: string){
    const alert = await this.alertController.create({
      header: 'Un ultimo paso...',
      message,
      buttons: ['OK']
    })
    await alert.present();
  }

  async succes(message: string) {
    const alert = await this.alertController.create({
      header: 'Transaccion Correcta :)',
      message,
      buttons: ['OK']
    });

    await alert.present();
  }
}
