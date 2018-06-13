export class Post {
  title: string
  content: string
  loveIts: number
  created_at: Date
  constructor(title:string,content:string){
      this.created_at =  new Date();
      this.title = title;
      this.content = content;
      this.loveIts = 0;

  }
  getLove(){
      return this.loveIts;
  }
  addLove(){
     
      return this.loveIts += 1;
  }
  removeLove(){
      
      return this.loveIts-= 1;
  }
}
