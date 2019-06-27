import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Image} from '../image.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiUrl = 'https://png.sijeko.ru/api/v1/images';
  imageLimit = '?count=12';
  constructor(private http: HttpClient) { }

  getImages() {
    return this.http.get<Image[]>(this.apiUrl + this.imageLimit);
  }


}
