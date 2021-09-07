import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './components/courses/courses.component';
import { HomeComponent } from './components/home/home.component';
import { YoutubeComponent } from './components/youtube/youtube.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'courses', component: CoursesComponent},
  {path: 'youtube', component: YoutubeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
