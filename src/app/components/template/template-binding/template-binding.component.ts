import { Component } from '@angular/core';

@Component({
  selector: 'app-template-binding',
  standalone: true,
  imports: [],
  templateUrl: './template-binding.component.html',
  styleUrl: './template-binding.component.scss'
})
export class TemplateBindingComponent {
    public nome = "Aglis Bernardino da Silva"
    public idade = 19

    public maiorDeIdade = this.idade >= 18 ? 'é maior de idade' : 'é menor de idade'

}
