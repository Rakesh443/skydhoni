import { Component, OnInit } from '@angular/core';
import { Courses } from 'src/app/models/courses.model';
import { YoutubeService } from '../youtube/youtube.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor( private service:YoutubeService) { }

  // course: Courses = new Courses;
  s!: string;
  count=1;
  list:any[]=[]
  ngOnInit(): void {
    var course=this.service.getCourse();
    this.s=course.playlist[0];
    course.playlist.forEach(element => {
      
      this.list.push("Video "+this.count);
      this.count++;
    });
    
    this.list=course.playlist;

  }

}
