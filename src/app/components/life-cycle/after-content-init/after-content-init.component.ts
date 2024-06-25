import { AfterContentInit, Component, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-after-content-init',
  standalone: true,
  imports: [],
  templateUrl: './after-content-init.component.html',
  styleUrl: './after-content-init.component.scss'
})
export class AfterContentInitComponent implements AfterContentInit{
    @ContentChild('paragrafo') public paragrafo !: ElementRef

    ngAfterContentInit(): void {
        console.log('NgAfterContentInit')
        console.log(this.paragrafo?.nativeElement)
    }
}
