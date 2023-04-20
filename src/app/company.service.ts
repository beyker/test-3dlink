import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Company } from './company.model';

@Injectable({
  providedIn: 'root'
})

export class CompanyService {
  private _company$ = new BehaviorSubject<Company[]>([]);
  readonly companys$ = this._company$.asObservable();

  private company: Company[] = [];
  private nextId = 5;

  constructor() {
    setTimeout(() => {
      this.setCompanys([
        {
          id: 1,
          value: 'Coca-cola Venezuela S.A'
        },
        {
          id: 2,
          value: 'Empresas  Polar C.A'
        },
        {
          id: 3,
          value: 'Nestlé C.A'
        },
        {
          id: 4,
          value: 'Adidas'
        }
      ]);
    }, 100);
  }

  setCompanys(companys: Company[]) {
    this.company = companys;
    this._company$.next(companys);
  }

  getCompanys() {
    return this._company$.asObservable();
  }

  create(item: Company) {
    this.nextId = ++this.nextId;
    item.id = this.nextId;
    //console.log(item, this._companys$.value());

    //Update database
    this.company.push(item);
    this._company$.next(Object.assign([], this.company));
  }
}
