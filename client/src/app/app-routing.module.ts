import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ArchiveComponent } from './components/archive/archive.component';
import { AboutComponent } from './components/home/about/about.component';
import { JobsComponent } from './components/home/jobs/jobs.component';
import { ProyectsComponent } from './components/home/proyects/proyects.component';
import { ContactComponent } from './components/home/contact/contact.component';

const routes: Routes = [
  // { path: ':language?', component: HomeComponent },
  // { path: 'archive', component: ArchiveComponent },
  // { path: ':language?/proyectos', component: ArchiveComponent },

  { path: 'about', component: AboutComponent },
  { path: 'jobs', component: JobsComponent },
  { path: 'project', component: ProyectsComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: '/about', pathMatch: 'prefix' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
