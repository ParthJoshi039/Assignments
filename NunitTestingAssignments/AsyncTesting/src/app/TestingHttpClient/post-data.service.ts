import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Post } from '../model/post.models';
import { promise } from 'protractor';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostDataService {

  // url = 'https://jsonplaceholder.typicode.com';

  constructor(private http:HttpClient) { }

  async getPostData():Promise<Observable<any>>
  {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }

  async getPostDatabyId(id:number):Promise<Observable<any>>
  {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts/${id}');
  }

  async Add(id:number):Promise<Observable<any>>
  {
    return this.http.post<Post[]>('https://jsonplaceholder.typicode.com/posts', {id:5,userId:3,title:"Testing Angular",body:"Hello World"});
  }
  
  async update():Promise<Observable<any>>
  {
    return this.http.put<Post[]>('https://jsonplaceholder.typicode.com/posts/5', {id:5,userId:3,title:"Async Testing Angular",body:"Hello World Again"});
  }

  async deletepost(id:number):Promise<Observable<any>>
  {
    return this.http.delete<Post[]>('https://jsonplaceholder.typicode.com/posts/${id}');
  }

}
