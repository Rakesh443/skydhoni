import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Course } from 'src/app/models/course.model';
import { Courses } from 'src/app/models/courses.model';
import { YoutubeService } from './youtube.service';
import 'firebase/firestore';
import firebase from 'firebase/app';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.css']
})
export class YoutubeComponent implements OnInit {

  constructor(private service:YoutubeService, public sanitizer: DomSanitizer) { }

  items:string[] = []
  coursesArray: Courses[]=[]
  db=firebase.firestore()
  courses: Courses = new Courses;
  s:any;
  ngOnInit(): void {
    
    this.courses= this.service.getCourse()
    // this.s=this.courses.videoURL
    this.items=this.courses.playlist
    this.s=this.items[0];
    console.log(this.s)
    // this.getCourse()
  }

  getCourse(){
    
    // this.items = Array.from({length: 100}).map((_, i) => `Item #${i}`);
    // this.db.collection('Course').get().then((data)=>{
    //   data.forEach((doc)=>{
    //       let cos = new Courses
    //       cos._id=doc.id;
    //       cos.name=doc.data().name;
    //       cos.desc= doc.data().description;
    //       this.items=doc.data().playlist;
    //     this.coursesArray.push(cos)
    //   })
    // })
}

downloadPdf(base64String: string, fileName: string) {
  const source = "assets/pdf/pdf1.pdf"
  const link = document.createElement("a");
  link.href = source;
  link.download = `${fileName}.pdf`
  link.click();
}
onClickDownloadPdf(){
  let base64String = "your-base64-string";
  this.downloadPdf(base64String,"sample");
}
  

}
