import { Component, Input, signal } from '@angular/core';

function toUpperCase(text: string) {
  return text.toUpperCase()
}

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent{
  public name = signal('Sem Dados')
  @Input({
    // alias 'setName' -> altera o nome que sera usado no componente pai para inserir o dado
    required: true,
    transform: toUpperCase
  }) set inputName(value: string) {
    this.name.set(value)
  }
}
