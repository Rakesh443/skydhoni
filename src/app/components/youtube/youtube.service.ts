import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/app/models/course.model';
import { Courses } from 'src/app/models/courses.model';


@Injectable({
    providedIn: 'root'
  })
  export class YoutubeService {
    course!: Courses;
    s:string='';

    setVideolink(videolink:string){
      this.s=videolink
    }

    getVideolink(){
      return this.s
    }

    constructor( ) { }

    getCourse(){
        return this.course
    }

    setCourse(course:Courses){
      
        this.course=course
    }
  }