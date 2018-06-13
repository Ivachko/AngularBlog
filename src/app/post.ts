export class Post {
  private _title: string;
  public get title(): string {
    return this._title;
  }
  public set title(value: string) {
    this._title = value;
  }
  private _content: string;
  public get content(): string {
    return this._content;
  }
  public set content(value: string) {
    this._content = value;
  }
  private _loveIts: number = 0;
  public get loveIts(): number {
    return this._loveIts;
  }
  public set loveIts(value: number) {
    this._loveIts = value;
  }
  created_at: Date = new Date();
  constructor(title:string,content:string){
      this.title = title;
      this.content = content;

  }
  
}
