import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { NewComponent } from '../../new-component/new-component.component';

@Component({
  selector: 'app-template-variables',
  standalone: true,
  imports: [NewComponent],
  templateUrl: './template-variables.component.html',
  styleUrl: './template-variables.component.scss'
})
export class TemplateVariablesComponent implements AfterViewInit {

    @ViewChild('input') public inputElement!: ElementRef
    @ViewChild('h3') public h3Element!: ElementRef

    @ViewChild(NewComponent) public childComponent!: NewComponent

    public h3Text: string = ""

    ngAfterViewInit(): void {
        console.log(this.inputElement.nativeElement)
        console.log(this.h3Element.nativeElement)
        console.log(this.childComponent.nome)
    }

}
