import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Image} from '../image.model';
import {HttpHeaders} from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders ({
    'Content-Type': 'multipart/form-data'
  })
};
@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiUrl = 'https://png.sijeko.ru/api/v1/images';
  imageLimit = '?count=24';
  constructor(private http: HttpClient) { }
  getImages() {
    return this.http.get<Image[]>(this.apiUrl + this.imageLimit);
  }

}
