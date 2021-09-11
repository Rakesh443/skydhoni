import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Course } from 'src/app/models/course.model';
import { YoutubeService } from './youtube.service';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.css']
})
export class YoutubeComponent implements OnInit {

  constructor(private service:YoutubeService, public sanitizer: DomSanitizer) { }

  course: Course = new Course("1","gfds","betbfgdv","thgervd","tgrfe"); 
  s:any
  ngOnInit(): void {
    
    this.course= this.service.getCourse()

    this.s=this.course.videoURL
    console.log(this.course.name)
  }


  

}
