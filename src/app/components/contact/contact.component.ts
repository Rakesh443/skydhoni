import { Component, OnInit } from '@angular/core';
import 'firebase/firestore';
import firebase from 'firebase/app';
import { Courses } from 'src/app/models/courses.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {


  items:string[] = Array.from({length: 100}).map((_, i) => `Item #${i}`);
  coursesArray: Courses[]=[]
  constructor() {   }
  db=firebase.firestore()
  ngOnInit(): void {
    // this. getCourse()
    
    // this.getvideoList()
    
  }

  getCourse(){
    // this.items = Array.from({length: 100}).map((_, i) => `Item #${i}`);
    this.db.collection('Course').get().then((data)=>{
      data.forEach((doc)=>{
          let cos = new Courses
          cos._id=doc.id;
          cos.name=doc.data().name;
          cos.desc= doc.data().description;
          this.items=doc.data().playlist;
        this.coursesArray.push(cos)
        console.log(this.coursesArray.length)
      })
    })
    
  }

  getvideoList(){
    setTimeout(() => {
      console.log(this.coursesArray.length)
      let s=this.coursesArray[0]._id
    // s='Course/'+s;
    // console.log(this.db.collection("Course").get(s))
    }, 3000);
    
    
  }

}
