import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {AngularFireDatabase} from 'angularfire2/database';
import { MaterializeModule } from 'angular2-materialize';

@Component({
  selector: 'upload-form',
  templateUrl: './upload-form.component.html',
  styleUrls: ['./upload-form.component.css']
})
export class UploadFormComponent implements OnInit {

  form: FormGroup;

  constructor( private fb: FormBuilder, private af: AngularFireDatabase) {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', Validators.required]
    });
  }



  ngOnInit() {
  }

}
