import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { YoutubeService } from '../youtube/youtube.service';
import { Course } from 'src/app/models/course.model';
import 'firebase/firestore';
import firebase from 'firebase/app';
import { environment } from 'src/environments/environment';
import { Courses } from 'src/app/models/courses.model';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {


  // f=firebase.initializeApp(environment.firebaseConfig)
  constructor(private router:Router, private youtubeService:YoutubeService) { }

  db=firebase.firestore();
  cos:any=[]
  coursesArray: Courses[]=[]

  // course: Course = new Course;
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
          cos.playlist = doc.data().playlist;
        this.coursesArray.push(cos)
        console.log(doc.id)
      })
    })
  }


  gotoYoutube(course:Courses){
     this.youtubeService.setCourse(course)
     this.router.navigateByUrl('/blogs')
  }

  courses=[
    {'_id':"1", 'name':'Angular','desc':'rb hwbchwc jhcw cjhbcw cbc ccwb cjh','image':'assets/img/mqdefault_6s.webp',"videoURL":"https://www.youtube.com/watch?v=-qkfZ5R70vY"},
    {'_id':"2", 'name':'React','desc':'rb hwbchwc jhcw cjhbcw cbc ccwb cjh','image':'assets/img/mqdefault_6s.webp',"videoURL":"https://www.youtube.com/watch?v=-qkfZ5R70vY"},
    {'_id':"3", 'name':'Viw','desc':'rb hwbchwc jhcw cjhbcw cbc ccwb cjh','image':'assets/img/mqdefault_6s.webp',"videoURL":"https://www.youtube.com/watch?v=-qkfZ5R70vY"},
    {'_id':"4", 'name':'Django','desc':'rb hwbchwc jhcw cjhbcw cbc ccwb cjh','image':'assets/img/mqdefault_6s.webp',"videoURL":"https://www.youtube.com/watch?v=-qkfZ5R70vY"}

  ]
}
