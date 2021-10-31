import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Course } from 'src/app/models/course.model';
import { Courses } from 'src/app/models/courses.model';
import { YoutubeService } from '../../youtube.service';
import { YoutubeChildService } from '../youtubeChildService';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {


  // @Input()
  // parentData!: Courses;

  // @Output()
  // public childEvent = new EventEmitter();
   
   videosList:string[]=[]
   course:Courses=new Courses
  constructor(private service:YoutubeService) { }

  ngOnInit(): void {
    console.log("welcomr")
    this.course=this.service.getCourse()

    // setTimeout(() => {
    //   this.videosList=this.course.playlist;
    //   console.log(this.course.name)
    // }, 3000);
  

  // this.videosList=this.course.playlist
    
  }

  changeVideo(courselink:string){
    console.log(courselink)
    this.service.setVideolink(courselink)
  }

}
