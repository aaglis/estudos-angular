import { CommonModule, registerLocaleData } from '@angular/common';
import { Component, LOCALE_ID, signal } from '@angular/core';
import localePt from '@angular/common/locales/pt'
import { StringPipePipe } from '../../../pipes/string/string-pipe.pipe';

registerLocaleData(localePt)

@Component({
  selector: 'app-angular-pipes',
  standalone: true,
  imports: [CommonModule, StringPipePipe],
  templateUrl: './angular-pipes.component.html',
  styleUrl: './angular-pipes.component.scss',
  providers: [{provide: LOCALE_ID, useValue: 'pt-BR'}]
})
export class AngularPipesComponent {
  public date = signal(new Date())

  public json = [
    {name: 'Aglis Bernardino'},
    {name: 'João Freitas'}
  ]
}
