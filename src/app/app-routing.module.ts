import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';
import { CoursesComponent } from './components/courses/courses.component';
import { HomeComponent } from './components/home/home.component';
import { ListComponent } from './components/youtube/children/list/list.component';
import { YoutubeComponent } from './components/youtube/youtube.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'courses', component: CoursesComponent},
  {path: 'youtube', component: YoutubeComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'list', component: ListComponent},
  {path: 'blogs', component: BlogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
