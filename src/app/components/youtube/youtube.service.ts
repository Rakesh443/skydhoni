import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/app/models/course.model';


@Injectable({
    providedIn: 'root'
  })
  export class YoutubeService {


    
    course!: Course;
    constructor( ) { }

    getCourse(){
        return this.course
    }

    setCourse(course:Course){

        this.course=course
    }
  }