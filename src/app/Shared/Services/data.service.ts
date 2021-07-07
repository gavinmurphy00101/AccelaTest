import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { filter, map, mergeAll, mergeMap, switchMap } from "rxjs/operators";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
 
  public email: string = '';

  constructor(private http: HttpClient) { }

  public getUsers(email) : Observable<{}>{
    const url = 'https://jsonplaceholder.typicode.com/users?email=' + email;
    return this.http.get(url);
  }

  public getPosts(){
    const url = 'https://jsonplaceholder.typicode.com/posts'
    return this.http.get(url)
  }

  
}
