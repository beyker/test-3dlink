import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-count-text',
  templateUrl: './count-text.component.html',
  styleUrls: ['./count-text.component.css']
})

export class CountTextComponent {

  count: number = 0;
  remainingText!: number;
  mydata: string = '';

  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    lastName: new FormControl('', Validators.required)
  });

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
  }
}
