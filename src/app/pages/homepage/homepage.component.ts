import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  showSidenav : boolean = false;

  constructor() { }


  ngOnInit(): void {
  }

  linkToPage(sectionName : string){
    switch(sectionName){
      case 'projects': {
        break;
      }
      case 'aboutMe': {
        break;
      }
    }
  }

}
