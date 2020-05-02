import { Component, OnInit, Input } from '@angular/core';

import {trigger, style, transition, animate, state} from '@angular/animations';
import data from '../data';


@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css'],
  animations: [
    trigger('enterState',[
      state('void',style({
        transform: 'translateX(-100%)',
        opacity:0
      })),
      transition(':enter',[
        animate(300,style({
          transform:'translateX(0)',
          opacity:1
        }))
      ])
    ])
  ]
})

export class HelloComponent implements OnInit {
  @Input() name:string;
  public loading : boolean;
  public courses : any[]=data;

  constructor() {
    this.loading=true;
   }

  ngOnInit(): void {
    
  }

}
