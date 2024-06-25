import { Component } from '@angular/core';
import { OnInitComponent } from './on-init/on-init.component';
import { OnChangesComponent } from './on-changes/on-changes.component';
import { DoCheckComponent } from './do-check/do-check.component';
import { AfterViewInitComponent } from './after-view-init/after-view-init.component';
import { AfterContentInitComponent } from './after-content-init/after-content-init.component';

@Component({
  selector: 'app-life-cycle',
  standalone: true,
  imports: [
    OnInitComponent,
    OnChangesComponent,
    DoCheckComponent,
    AfterViewInitComponent,
    AfterContentInitComponent
  ],
  templateUrl: './life-cycle.component.html',
  styleUrl: './life-cycle.component.scss'
})
export class LifeCycleComponent {
    name = "Aglis"

    changeName(name: string) {
        this.name = name
    }
}
