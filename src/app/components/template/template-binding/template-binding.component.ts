import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-binding',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './template-binding.component.html',
  styleUrl: './template-binding.component.scss'
})
export class TemplateBindingComponent {
    public nome = "Luis Fernando de Sousa"
    public idade = 19
    public maiorDeIdade = this.idade >= 18 ? 'é maior de idade' : 'é menor de idade'
    public setDisable = true
    public setName: string = ''
    public isLegalAge = this.idade >= 18
    public setTextTransform = 'uppercase'

    sum() {
      this.idade++
    }
    sub() {
      this.idade--
    }

    pressKey(key: string) {
      console.log(key)
      this.setName += key
    }
}
