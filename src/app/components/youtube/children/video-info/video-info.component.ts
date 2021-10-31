import { Component, Input, OnInit } from '@angular/core';
import { Course } from 'src/app/models/course.model';

@Component({
  selector: 'app-video-info',
  templateUrl: './video-info.component.html',
  styleUrls: ['./video-info.component.css']
})
export class VideoInfoComponent implements OnInit {


  items = Array.from({length: 9}).map((_, i) => `Item #${i}`);

  @Input()
  parentData!: Course;
  constructor() { }

  ngOnInit(): void {
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
