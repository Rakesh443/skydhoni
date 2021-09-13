import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CoursesComponent } from './components/courses/courses.component';
import { YoutubeComponent } from './components/youtube/youtube.component';
import { urlPipe } from './components/youtube/urlPipe';
import { ListComponent } from './components/youtube/children/list/list.component';
import { VideoInfoComponent } from './components/youtube/children/video-info/video-info.component';
import { PlayComponent } from './components/youtube/children/play/play.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CoursesComponent,
    YoutubeComponent,
    urlPipe,
    ListComponent,
    VideoInfoComponent,
    PlayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
