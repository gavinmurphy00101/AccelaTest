import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss'],
})
export class CreatePostComponent {

  private postForm: FormGroup;

  constructor(
    public modalController: ModalController,
    private formBuilder: FormBuilder) {
      this.postForm = this.formBuilder.group({
        title: ['', Validators.required],
        body: ['', Validators.required]
      });
    }


  dismiss() {

    this.modalController.dismiss({
      title : this.postForm.value.title,
      body: this.postForm.value.body
    });
  }

  submit(){
    this.dismiss();
  }

}
