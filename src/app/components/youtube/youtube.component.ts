import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/models/course.model';
import { YoutubeService } from './youtube.service';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.css']
})
export class YoutubeComponent implements OnInit {

  constructor(private service:YoutubeService) { }

  course!: Course; 
  ngOnInit(): void {
    
    this.course= this.service.getCourse()
    console.log(this.course.name)
  }


  

}
