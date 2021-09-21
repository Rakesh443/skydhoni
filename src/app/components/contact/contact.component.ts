import { Component, OnInit } from '@angular/core';
import 'firebase/firestore';
import { AngularFirestore } from '@angular/fire/firestore';
import firebase from 'firebase/app';
import { FirebaseApp } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { Course } from 'src/app/models/course.model';
import { Courses } from 'src/app/models/courses.model';
// import 'firebase/firestore';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {


  
  coursesArray: Courses[]=[]
  constructor() {   }
  f=firebase.initializeApp(environment.firebaseConfig)
  db=firebase.firestore()
  ngOnInit(): void {
    this. getCourse()
    
  }

  getCourse(){
    this.db.collection('Course').get().then((data)=>{
      data.forEach((doc)=>{
          let cos = new Courses
          cos._id=doc.id;
          cos.name=doc.data().name;
          cos.desc= doc.data().description;
          cos.platlist = doc.data().plalist;
        this.coursesArray.push(cos)
        console.log(doc.id)
      })
    })
}
}
