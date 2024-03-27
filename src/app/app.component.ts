import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewComponent } from './components/new-component/new-component.component';
import { TemplateBindingComponent } from './components/template/template-binding/template-binding.component';
import { TemplateVariablesComponent } from './components/template/template-variables/template-variables.component';
import { TemplateControlFlowComponent } from './components/template/template-control-flow/template-control-flow.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NewComponent, TemplateBindingComponent, TemplateVariablesComponent, TemplateControlFlowComponent],
  styles: `
    .component {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px dotted blue;
        padding: 2rem;
        margin: 0 0 2rem 0
    }
  `,
  template: `
    <!-- <router-outlet /> -->
    <div class="component">
        <h1>Curso de Angular 17!</h1>
    </div>
    <!-- <app-new-component /> -->
    <!-- <app-template-binding /> -->
    <!-- <app-template-variables /> -->
    <app-template-control-flow>
  `
})
export class AppComponent {
  title = 'projeto-latest-version';
}
