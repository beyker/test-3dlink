import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-my-list',
  templateUrl: './my-list.component.html',
  styleUrls: ['./my-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class MyListComponent {

  typesOfShoes: string[] = ['Botas', 'Zuecos', 'Mocasines', 'Zapatillas'];

  counter: number = 0;

  constructor() { }

  ngOnInit() {
    this.countItem();
    console.log("En este instante el componente ha cargado");
  }

  removeItem( index: number ) {
    this.typesOfShoes.splice(index, 1);
    this.countItem();
  }

  countItem() {
   console.log('calculado tamaño');
   this.counter = this.typesOfShoes.length;
  }

}
