import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CreateService} from './services/produtos/create.service';
import { CalcularService} from './services/produtos/calcular.service';
import { ProductosService} from './services/produtos/productos.service';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

 
  productoForm!: FormGroup; 


  constructor(
    
    public fb : FormBuilder,
    public createservice:CreateService,
    public calcularsevice:CalcularService,
    public productosService:ProductosService



    ){
    
  }
 
  ngOnInit(): void {
  
    this.productoForm=this.fb.group({
      id: [''],
      nombre :['',Validators.required] ,
      tiempo1 : [0,Validators.required] ,
      tiempo2 : [0,Validators.required] ,
      tiempo3 :[0,Validators.required] ,

    })

}
guardar(): void {
}

}
