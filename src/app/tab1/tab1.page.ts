import { Component } from '@angular/core';
import { DataService } from '../Shared/Services/data.service';
import { Post } from '../Modals/post.modal';
import { ModalController } from '@ionic/angular';
import { CreatePostComponent } from '../Shared/Components/create-post/create-post.component';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  userPosts: Array<any> = [];
  otherPosts: Array<any> = [];

  constructor(
    private dataService: DataService,
    public modalController: ModalController) {}

  ionViewWillEnter(){
    if(!localStorage.getItem('userPosts')){
      const user = JSON.parse(localStorage.getItem('users'));
      this.userPosts = [];
      this.otherPosts = [];
      this.dataService.getPosts().subscribe(res=>{

          for(let i in res){
            if(user[0].id === res[i].userId){
              this.userPosts.push(res[i]);
            }else{
              this.otherPosts.push(res[i]);
            }
          }

          this.userPosts = this.userPosts.slice().reverse();
          localStorage.setItem('userPosts', JSON.stringify(this.userPosts));
          localStorage.setItem('otherPosts', JSON.stringify(this.otherPosts));
        });
    }else{
      this.userPosts = JSON.parse(localStorage.getItem('userPosts'));
    }
  }

  public addPost(post: Post){
    this.userPosts.push(post);
    this.userPosts = this.userPosts.slice().reverse();
    this.updateLocalStorage(post);
  }

  private updateLocalStorage(post){
    let posts = JSON.parse(localStorage.getItem('userPosts'));
    posts.push(post);
    localStorage.setItem('userPosts', JSON.stringify(posts));
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  async presentModal() {
    const modal = await this.modalController.create({
      component: CreatePostComponent,
      cssClass: 'my-custom-class'
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        const body = dataReturned.data.body;
        const title = dataReturned.data.title;

        const post:  Post = {
          body: body,
          id: 5,
          title: title,
          userId: 5
        };

        this.addPost(post);
      }
    });

    return await modal.present();
  }

}
