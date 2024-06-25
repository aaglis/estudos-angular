import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-do-check',
  standalone: true,
  imports: [],
  templateUrl: './do-check.component.html',
  styleUrl: './do-check.component.scss'
})
export class DoCheckComponent implements DoCheck {
    numero = 0

    ngDoCheck(): void {
        console.log('ngDoCheck foi chamado: detectou alguma mudança')
    }

    toBigger() {
        this.numero++
    }

}
