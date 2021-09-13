import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Course } from 'src/app/models/course.model';
import { YoutubeService } from '../../youtube.service';
import { YoutubeChildService } from '../youtubeChildService';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {


  @Input()
  parentData!: Course;

  @Output()
  public childEvent = new EventEmitter();
   
   videosList:Array<Course>=[]
   course:Course=new Course("100","Mathe5","sdkj urfh ghw ruig rge r gu yg yu","dfghjklkjhg","dfghjklkjhgfcvghjkjhg")
  constructor(private service:YoutubeService) { }

  ngOnInit(): void {
    this.videosList.push(this.parentData)
    this.videosList.push(this.course)
    this.videosList.push(this.parentData)
    this.videosList.push(this.parentData)
  }

  changeVideo(course:Course){
    console.log(course.name)
    this.childEvent.emit(course)
  }

}
