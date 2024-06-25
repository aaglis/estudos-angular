import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-on-changes',
  standalone: true,
  imports: [],
  templateUrl: './on-changes.component.html',
  styleUrl: './on-changes.component.scss'
})
export class OnChangesComponent implements OnChanges {

    @Input() public name = ''

    ngOnChanges(changes: SimpleChanges): void {
        console.log(changes)
    }

}
