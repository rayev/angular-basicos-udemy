import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    template: `
    <span> {{ title }} </span>
    <hr>
    <button (click)='restar()'> - 1 </button>
    <button (click)='accion(-1)'> - 1 Generico</button>
    <button (click)='accionB(-base)'> - {{base}} Base</button>
    <span> {{ numero }} </span>
    <button (click)='sumar()'> + 1 </button>
    <button (click)='accion(+1)'> + 1 Generico</button>
    <button (click)='accionB(+base)'> + {{base}} Base</button>
    <h3>la base es: <strong> {{base}} </strong></h3>
    `
})


export class ContadorComponent {

    public title: string = 'Contador App';

    public numero: number = 10;
    public base: number = 8;
  
  
    restar(){
      this.numero -= 1;
    }
  
    sumar(){
      this.numero = this.numero + 1;
    }
  
    accion( valor: number ){
      this.numero += valor;
    }
  
    accionB( valor: number ){
      this.numero += valor;
    }

}