import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {

  Nombre: string = "";
  Apellido: string = "";
  Edad: number = 0;

  constructor(private router: Router, private activedrouter: ActivatedRoute) { 
    this.activedrouter.queryParams.subscribe(param =>{
      //validamos si llega o no la informacion
      if(this.router.getCurrentNavigation()?.extras.state){
        this.Edad = this.router.getCurrentNavigation()?.extras?.state?.['ed'];
        this.Nombre = this.router.getCurrentNavigation()?.extras?.state?.['nom'];
        this.Apellido = this.router.getCurrentNavigation()?.extras?.state?.['ape'];
      }
    });
  }

  ngOnInit() {
  }

}
