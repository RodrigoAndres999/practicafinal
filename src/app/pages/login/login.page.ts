import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  apellido: string = "Rodriguez";
  edad: number = 29;
  nombre: string = "dddee";

  Persona: any = {
    nombre: 'José',
    apellido: 'Suarez',
    edad: 25
  }

  listaP: any = [
    {
      id: 1,
      comuna: 'Lo Espejo'
    },
    {
      id: 2,
      comuna: 'Huechuraba'
    },
    {
      id: 3,
      comuna: 'Colina'
    }
  ]
  

  constructor(private router:Router, private alertController: AlertController, private toastController: ToastController) { }

  ngOnInit() {
  }

  async presentAlert(titulo:string, msj:string) {
    const alert = await this.alertController.create({
      header: titulo,
      message: msj,
      buttons: ['OK'],
    });

    await alert.present();
  }

  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: 'Soy un mensaje',
      duration: 2500,
      position: position,
    });

    await toast.present();
  }

  irPagina(){
    //crear la logica de programación
    //crear mi variable de contexto
    let navigationextras: NavigationExtras = {
      state:{
        nom: this.nombre,
        ape: this.apellido,
        ed: this.edad
      }
    }
    this.presentToast('bottom');
    //this.presentAlert('Hola','Soy un mensaje');
    this.router.navigate(['/agregar'], navigationextras);
  }

}
