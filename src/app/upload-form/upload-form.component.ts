import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Upload } from './upload';
import * as firebase from 'firebase';

@Component({
  selector: 'upload-form',
  templateUrl: './upload-form.component.html',
  styleUrls: ['./upload-form.component.css']
})
export class UploadFormComponent implements OnInit {

  form: FormGroup;
  dataLayer;

  constructor( private fb: FormBuilder, private af: AngularFireModule, private db: AngularFireDatabase) {

    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', Validators.required]
    });
  }

  selectedFiles: FileList;
  currentUpload: Upload;

  detectFiles(event) {
    this.selectedFiles = event.target.files;
  }

  uploadSingle() {
    let file = this.selectedFiles.item(0);
    this.currentUpload = new Upload(file);
    this.pushUpload(this.currentUpload)
  }

  private basePath:string = '/applicants';
  uploads: FirebaseListObservable<Upload[]>;


  pushUpload(upload: Upload) {
    let storageRef = firebase.storage().ref();
    let uploadTask = storageRef.child(`applicantsCV/${upload.file.name}`).put(upload.file);
    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) =>  {
        // upload in progress
        upload.progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      },
      (error) => {
        // upload failed
        console.log(error);
        (<HTMLInputElement>document.getElementById('applicantForm')).classList.add('hide');
        (<HTMLInputElement>document.getElementById('formError')).classList.add('show');
      },
      () => {
        console.log('success');
        // upload success

        //set the upload classes data (upload.ts)
        upload.fileName = upload.file.name;
        upload.applicantName = (<HTMLInputElement>document.getElementById('first_name')).value;
        upload.applicantSurname = (<HTMLInputElement>document.getElementById('surname')).value;
        upload.position = (<HTMLInputElement>document.getElementById('position')).value;
        upload.applicantEmail = (<HTMLInputElement>document.getElementById('email')).value;
        upload.downloadUrl = uploadTask.snapshot.downloadURL;

        this.saveFileData(upload);

        //GTM DataLayer Event
        (<any>window).dataLayer.push({
          'event':'apply_success'
        });

        (<HTMLInputElement>document.getElementById('applicantForm')).classList.add('hide');
        (<HTMLInputElement>document.getElementById('formThanks')).classList.add('show');
      }
    );
  }



  // Writes the file details to the realtime db
  private saveFileData(upload: Upload) {
    this.db.list(`${this.basePath}/`).push(upload);
  }





  ngOnInit() {
  }

}
