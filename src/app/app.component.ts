import { Component } from '@angular/core';
import firebase from 'firebase/app';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  f=firebase.initializeApp(environment.firebaseConfig)
  title = 'skydhoni';
}
