import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
  animations: [
    trigger('openCloseSidenav',
    [state('open', style({
      width: '20vw',
      opacity: 1
    })),
    state('close', style({
      width: '0',
      opacity: 0.5
    })),
    transition('close => open', [animate('300ms ease-in')]),
    transition('open => close', [animate('300ms ease-out')])
  ])
  ]
})
export class SidenavComponent implements OnInit {

  isSidenavHidden : boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  showSidenav() {
    this.isSidenavHidden = !this.isSidenavHidden;
  }
  showSidenavAnimation(){
    if(this.isSidenavHidden === true){
      return 'close';
    } else {
      return 'open';
    }
  }
}
