import { EventEmitter, Injectable, Output } from '@angular/core';
import { Course } from 'src/app/models/course.model';


@Injectable({
    providedIn: 'root'
  })
  export class YoutubeChildService {


    @Output()
    public childEvent = new EventEmitter();

    course!: Course;
    constructor( ) { }


    getCourse(){
        return this.course
    }

    setCourse(course:Course){
        this.course=course
       
    }
    

  }