import { Injectable } from '@angular/core';
import { Producto} from '../../Producto/producto'


@Injectable({
  providedIn: 'root'
})
export class CreateService {


  constructor(
  private 

  ) { }

  productoNuevo:Producto={
      id:0,
      nombre:"",
      tiempo1:0,
      tiempo2:0,
      tiempo3:0,

  }

}

