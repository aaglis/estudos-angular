import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TemplateBindingComponent } from './components/template/template-binding/template-binding.component';
import { TemplateVariablesComponent } from './components/template/template-variables/template-variables.component';
import { TemplateControlFlowComponent } from './components/template/template-control-flow/template-control-flow.component';
import { TemplateDeferrableViewsComponent } from './components/template/template-deferrable-views/template-deferrable-views.component';
import { SignalComponent } from './components/signal/signal.component';
import { PaiOuMaeComponent } from './components/comunicacao-entre-componentes/pai-ou-mae/pai-ou-mae.component';
import { AngularPipesComponent } from './components/pipes/angular-pipes/angular-pipes.component';
import { TemplateDrivenFormComponent } from './components/forms/template-driven-form/template-driven-form.component';
import { ReactiveFormsComponent } from './components/forms/reactive-forms/reactive-forms.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TemplateBindingComponent,
    TemplateVariablesComponent,
    TemplateControlFlowComponent, 
    TemplateDeferrableViewsComponent, 
    SignalComponent, 
    PaiOuMaeComponent,
    AngularPipesComponent,
    TemplateDrivenFormComponent, 
    ReactiveFormsComponent
  ],
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
    <!-- <app-template-deferrable-views /> -->
    <!-- <app-signal> -->
    <!-- <app-pai-ou-mae /> -->
    <!-- <app-angular-pipes /> -->
    <!-- <app-template-driven-form /> -->
    <app-reactive-forms />
  `
})
export class AppComponent {
  title = 'projeto-latest-version';
}
