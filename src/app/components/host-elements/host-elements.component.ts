import { Component, HostBinding, HostListener } from '@angular/core';

@Component({
  selector: 'app-host-elements',
  standalone: true,
  imports: [],
  templateUrl: './host-elements.component.html',
  styleUrl: './host-elements.component.scss',
//   -> forma nova: <-
//   host: {
//     'class': 'classe',
//     '(click)': 'clickEvent()'
//   }
})
export class HostElementsComponent {
    // -> forma antiga: <-
    @HostBinding('class') nomeDaClasse = "classe"

    @HostListener('click') clickEvent() {
        console.log('clicou no elemento host!')
    }

}
