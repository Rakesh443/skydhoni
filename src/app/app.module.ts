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
import { ContactComponent } from './components/contact/contact.component';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatListModule} from '@angular/material/list';
import {AngularFireModule} from '@angular/fire'
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule} from '@angular/fire/firestore'
import { ScrollingModule } from '@angular/cdk/scrolling';
import { BlogComponent } from './components/blog/blog.component';

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
    PlayComponent,
    ContactComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatListModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,ScrollingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
