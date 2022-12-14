import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ProjectsComponent } from './pages/projects/projects.component';
const routes:Routes  = [
  { path: '', redirectTo: 'homepage', pathMatch: 'full'},
  { path: 'homepage', component: HomepageComponent, pathMatch: 'full',
children: [{
  path: 'homepage', component: SidenavComponent
}]},
  { path: 'projects', component: ProjectsComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
