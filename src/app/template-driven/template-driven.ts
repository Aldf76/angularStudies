import { Component } from '@angular/core';

@Component({
  selector: 'app-template-driven',
  standalone: false,
  templateUrl: './template-driven.html',
  styleUrl: './template-driven.css'
})
export class TemplateDriven {

email = '';

submitForm(form: any){
console.log('Email enviado', this.email)
console.log('Form válido ?', form.valid)
}
}
