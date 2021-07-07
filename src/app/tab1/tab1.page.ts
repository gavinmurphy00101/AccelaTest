import { Component } from '@angular/core';
import { DataService } from '../Shared/Services/data.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  userPosts : Array<any> = [];
  otherPosts: Array<any> = [];

  constructor(private dataService : DataService) {}

  ionViewWillEnter(){
    if(!localStorage.getItem('userPosts')){
      const user = JSON.parse(localStorage.getItem('users'))
      this.userPosts = [];
      this.otherPosts = [];
      this.dataService.getPosts().subscribe(res=>{
        
          for(let i in res){
  
            if(user[0].id === res[i].userId){
              this.userPosts.push(res[i]);
            }else{
              this.otherPosts.push(res[i])
            }
            
          }
          localStorage.setItem('userPosts', JSON.stringify(this.userPosts));
          localStorage.setItem('otherPosts', JSON.stringify(this.otherPosts));
        }) 
      
    }else{
      this.userPosts = JSON.parse(localStorage.getItem('userPosts'));
    }
  }
    

}
