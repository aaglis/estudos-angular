import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  standalone: true,
  imports: [],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.scss'
})
export class SignalComponent {

  public firstName = signal('Aglis')
  public secondName = signal('Bernardino')
  public fullName = computed(() => `${this.firstName()} ${this.secondName()}`)

  public array = signal([1])

  constructor() {
    effect(() => console.log(this.array()))
  }


  public setName() {
    return this.firstName.set('Joao')
  }

  public addItem() {
    this.array.update((oldValues: Array<number>) => [...oldValues, oldValues.length + 1])
  }



}
