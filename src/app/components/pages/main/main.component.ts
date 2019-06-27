import { Component, OnInit } from '@angular/core';
import {Image} from '../../../image.model';
import {DataService} from '../../../services/data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  images$: Image[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    return this.dataService.getImages()
      .subscribe(data => this.images$ = data);
  }
}
