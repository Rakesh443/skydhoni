import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { Router } from '@angular/router';
import { YoutubeService } from '../youtube/youtube.service';
import { Course } from 'src/app/models/course.model';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {



  constructor(private router:Router, private youtubeService:YoutubeService) { }

  // db=firebase.firestore();
  cos:any=[]
  courses1:Array<Course>=[]

  // course: Course = new Course;
  ngOnInit(): void {
    // this. getCourse()
    // this.http.get('http://localhost:9000/courses').subscribe((data)=>{
    //   this.cos=data as Course
    // })
      let course1 = new Course("1", 'Maths1','Maths1 video','assets/img/mqdefault_6s.webp',"https://www.youtube.com/embed/doTywG3khQY");
      this.courses1.push(course1)
      let course2 = new Course("2",'Maths2','Maths2 video','assets/img/mqdefault_6s.webp',"https://www.youtube.com/embed/sshmTpPn1Do")
      this.courses1.push(course2)
      let course3 = new Course("3",'Maths3','Maths3 video','assets/img/mqdefault_6s.webp',"https://www.youtube.com/watch?v=-qkfZ5R70vY")
      this.courses1.push(course3)

  }
  

  // getCourse()
    // console.log(this.courseForm.value.courseName)
  //   this.db.collection("courses").get().then((data) => {
  //     data.forEach((doc)=> {
  //       this.courses1.push(doc.data())
  //       console.log(doc.data())
  //     })
  //   })

  // }

  gotoYoutube(course:Course){
     this.youtubeService.setCourse(course)
     this.router.navigateByUrl('/youtube')
  }

  courses=[
    {'_id':"1", 'name':'Angular','desc':'rb hwbchwc jhcw cjhbcw cbc ccwb cjh','image':'assets/img/mqdefault_6s.webp',"videoURL":"https://www.youtube.com/watch?v=-qkfZ5R70vY"},
    {'_id':"2", 'name':'React','desc':'rb hwbchwc jhcw cjhbcw cbc ccwb cjh','image':'assets/img/mqdefault_6s.webp',"videoURL":"https://www.youtube.com/watch?v=-qkfZ5R70vY"},
    {'_id':"3", 'name':'Viw','desc':'rb hwbchwc jhcw cjhbcw cbc ccwb cjh','image':'assets/img/mqdefault_6s.webp',"videoURL":"https://www.youtube.com/watch?v=-qkfZ5R70vY"},
    {'_id':"4", 'name':'Django','desc':'rb hwbchwc jhcw cjhbcw cbc ccwb cjh','image':'assets/img/mqdefault_6s.webp',"videoURL":"https://www.youtube.com/watch?v=-qkfZ5R70vY"}

  ]
}
