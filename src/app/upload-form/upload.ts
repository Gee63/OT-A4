export class Upload {
  $key: string;
  applicantName:string;
  applicantSurname:string;
  position:string;
  file:File;
  fileName:string;
  progress:number;
  downloadUrl:string;
  createdAt: Date = new Date();
  constructor(file:File) {
    this.file = file;
  }
}
