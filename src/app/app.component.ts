import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TemplateBindingComponent } from './components/template/template-binding/template-binding.component';
import { TemplateVariablesComponent } from './components/template/template-variables/template-variables.component';
import { TemplateControlFlowComponent } from './components/template/template-control-flow/template-control-flow.component';
import { TemplateDeferrableViewsComponent } from './components/template/template-deferrable-views/template-deferrable-views.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TemplateBindingComponent, TemplateVariablesComponent, TemplateControlFlowComponent, TemplateDeferrableViewsComponent],
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
    <app-template-deferrable-views />
  `
})
export class AppComponent {
  title = 'projeto-latest-version';
}
