import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: []
})
export class ListadoComponent implements OnInit {

  public heroeBorrado: string = '';
  constructor() {
    console.log('constructor');
  }
  
  ngOnInit(): void {
    console.log('ngOnint');
  }

  heroes: string[] = ['Spiderman', 'Iroman', 'Hulk', 'Thor', 'Capitán América']

  borrarHeroe(){
    console.log('borrando...');
    this.heroeBorrado = this.heroes.pop() || '';
    console.log(this.heroeBorrado);
  }

}
