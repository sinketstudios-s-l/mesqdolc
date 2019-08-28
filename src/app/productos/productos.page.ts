import { Component, OnInit } from '@angular/core';
import { FondantPage } from '../fondant/fondant.page';
import { Router } from '@angular/router';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {

  fondant = FondantPage
  id="123123"

  productsList: productos[] = [
    {
      titulo: 'Fondant',
      img: '../assets/img/gama-fondant.png',
      redirectTo: '/fondant/',
      size: 6
    },
    {
      titulo: 'Colorante',
      img: '../assets/img/colorantes.jpg',
      redirectTo: '',
      size: 6
    },
    {
      titulo: 'Saborizantes',
      img: '../assets/img/saborizantes.jpg',
      redirectTo: '/fondant',
      size: 6
    },
    {
      titulo: 'Comestibles',
      img: '../assets/img/comestibles.jpg',
      redirectTo: '',
      size: 6
    },
    {
      titulo: 'Moldes',
      img: '../assets/img/moldes.jpg',
      redirectTo: '/fondant',
      size: 6
    },
    {
      titulo: 'Alquiler',
      img: '../assets/img/alquiler.jpg',
      redirectTo: '',
      size: 6
    },
    {
      titulo: 'Accesorios',
      img: '../assets/img/accesorios.jpg',
      redirectTo: '/fondant',
      size: 6
    },
    {
      titulo: 'Otros',
      img: '../assets/img/tarta.jpg',
      redirectTo: '',
      size: 6
    }
  ]
    

  constructor(private router: Router) { }

  ngOnInit() {
  }


  openFondant(){
    this.router.navigate(['../fondant'])
  }


}


interface productos {
    titulo: string,
    img: string,
    redirectTo: string,
    size: number
}