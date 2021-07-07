import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  logout(){
    localStorage.removeItem('users');
    localStorage.removeItem('userPosts');
    localStorage.removeItem('otherPosts');
    this.router.navigate(['/login'])
  }

  constructor(private router: Router) {}

}
