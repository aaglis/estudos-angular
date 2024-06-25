import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-after-view-init',
  standalone: true,
  imports: [],
  templateUrl: './after-view-init.component.html',
  styleUrl: './after-view-init.component.scss'
})
export class AfterViewInitComponent implements AfterViewInit{
    @ViewChild('pText') public paragrafoEl!: ElementRef

    ngAfterViewInit(): void {
        console.log('AfterViewInit chamado: elemento já carregado: ')
        console.log(this.paragrafoEl.nativeElement)
    }

}
