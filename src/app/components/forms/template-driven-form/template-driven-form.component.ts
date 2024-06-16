import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

interface Country {
  name: string,
  code: string
}

@Component({
  selector: 'app-template-driven-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.scss'
})
export class TemplateDrivenFormComponent {


  arraySkills = signal<Array<{ value: string}>>(
    [
      {
        value: 'Angular'
      },
      {
        value: 'React'
      },
      {
        value: 'Vue'
      }
    ]
  )

  arrayCountries = signal<Array<Country>>(
    [
      {
        name: 'Brasil',
        code: 'BR'
      },
      {
        name: 'United States',
        code: 'USA'
      },
      {
        name: 'England',
        code: 'ENG'
      }
    ]
  )

  submitForm(form: NgForm) {
    console.log(form.valid)
    if(form.valid) {
      console.log(form.value)
    } else {
      return console.error("preencha todos os campos necessários")
    }

    return form
  }
}
