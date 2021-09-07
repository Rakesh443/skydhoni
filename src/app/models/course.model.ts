export class Course {
    _id: string="";
    name: string="";
    desc: string="";
    image: string="";
    videoURL: string ="";

    

  constructor(
    _id: string, 
    name: string, 
    desc: string, 
    image: string, 
    videoURL: string 
) {
    this._id = _id
    this.name = name
    this.desc = desc
    this.image = image
    this.videoURL = videoURL
  }
    
}
