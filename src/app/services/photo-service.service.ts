import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Photos } from 'app/models/photos';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class PhotoServiceService {

  photosUrl:string =  'https://jsonplaceholder.typicode.com/photos?_limit=5';

  constructor(private http:HttpClient) { }

  getPhotos():Observable<Photos[]>{
   return this.http.get<Photos[]>(this.photosUrl);
  }

  deletePhoto(item:Photos):Observable<Photos>{
    const url = `${this.photosUrl}/${item.id}`;
    return this.http.delete<Photos>(url,httpOptions);

  }

  addPhoto(item:Photos):Observable<Photos>{
    return this.http.post<Photos>(this.photosUrl,item,httpOptions);
  }
}
