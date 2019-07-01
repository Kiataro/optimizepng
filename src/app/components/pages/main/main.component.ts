import { Component, OnInit } from '@angular/core';
import {Image} from '../../../image.model';
import {DataService} from '../../../services/data.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  styles: [
    `
:host >>> .popover {
  background-color:#333333;
  color: #fff;
  border: 0.5px solid white;
}
:host >>> .popover>.arrow{
display: none;

}
  `
  ]
})
export class MainComponent implements OnInit {
  images$: Image[];

  constructor(private dataService: DataService, private http: HttpClient) {

  }

  ngOnInit() {
    return this.dataService.getImages()
      .subscribe(data => this.images$ = data );
  }


}

