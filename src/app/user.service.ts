import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }


  userUrl = 'http://localhost:3000/user';

  //Get All User
  getAllUser(): Observable<any>{
    return this.http.get(`${this.userUrl}`);
  }

  //Get Single User
  getSingleUser(id: any): Observable<any>{
    let ids = id
    return this.http.get(`${this.userUrl}/${ids}`);
  }

  //Delete User
  deleteUser(id:any): Observable<any>{
    let uid = id;
    return this.http.delete(`${this.userUrl}/${uid}`)
  }
  postUser(data: any): Observable<any>{
    return this.http.post(`${this.userUrl}`, data);
  }

}

  
