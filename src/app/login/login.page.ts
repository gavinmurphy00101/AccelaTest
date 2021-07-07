import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../Shared/Services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private dataService: DataService,
    private router: Router) { }

  ngOnInit() {
  }

  collectEmail(email){
    this.dataService.getUsers(email).subscribe(res=>{

      localStorage.setItem('users', JSON.stringify(res));
      return this.router.navigate(['/tabs/tab1'])
        
    }) 
  }

}
