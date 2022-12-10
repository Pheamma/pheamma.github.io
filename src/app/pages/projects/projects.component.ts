import { Component, OnInit } from '@angular/core';
import projectsCards from '../../../assets/resources/projectsCards.json';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects : {"header": string, "content": string, "link": string, "linkComment": string}[] = [];

  constructor() { }

  ngOnInit(): void {
    projectsCards.cards.forEach(c => {
      this.projects.push({"header": c.header, "content": c.content, "link": c.link, "linkComment": c.linkComment});
    });
  }

}
