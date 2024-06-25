import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-on-init',
  standalone: true,
  imports: [],
  templateUrl: './on-init.component.html',
  styleUrl: './on-init.component.scss'
})
export class OnInitComponent implements OnInit {

    text = ''

    ngOnInit() {
        console.log('OnInit Iniciado.')
        this.text = 'texto inserido'
    }

}
