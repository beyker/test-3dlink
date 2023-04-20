import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Company } from '../company.model';
import { CompanyService } from '../company.service';
import { Observable } from "rxjs";

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit{
  company : Company[] = []
  allForm: FormGroup;
  companyObs$: Observable<Company[]> | undefined;

  constructor(
    private companyService: CompanyService,
    private formBuilder: FormBuilder
    ) {
      this.allForm = this.formBuilder.group({
        id: [""],
        value: ["", Validators.required]
      });
    } 
  
  ngOnInit() {
    this.companyObs$ = this.companyService.companys$
    this.companyService.getCompanys().subscribe((company: any) => this.company = company)
  }

  onSubmit() {
    this.companyService.create(this.allForm.value);
  }

}
