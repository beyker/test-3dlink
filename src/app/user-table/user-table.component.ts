import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})

export class UserTableComponent {
  displayedColumns: string[] = ['first', 'last', 'address'];
  searchText: string = "";
  employeList: { first: string; last: string; address: string; }[];

  constructor() {
    this.employeList = [
      {
        first: "Juan",
        last: "Montero",
        address: "Los teques"
      },
      {
        first: "Pedro",
        last: "Capote",
        address: "Caracas"
      },
      {
        first: "Maria",
        last: "Adrian",
        address: "Maracay"
      }
    ];
  }
}
