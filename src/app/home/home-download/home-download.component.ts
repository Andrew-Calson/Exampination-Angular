import { Component, OnInit } from '@angular/core';
import { Download } from './download';

@Component({
  selector: 'app-home-download',
  templateUrl: './home-download.component.html',
  styleUrls: ['./home-download.component.css']
})
export class HomeDownloadComponent implements OnInit {
  imagedata: Download[];
  constructor() { }

  ngOnInit() {
    this.imagedata=this.getImageData();
  }

  getImageData(): Download[] {
    let data:Download[]=[
      {
        image:"../../../assets/img/app-store.189e324b.svg",
        className: "pl-8 pr-2 w-1/2"
      },
      {
        image:"../../../assets/img/google-play.b775eda8.svg",
        className: "pl-2 pr-8 w-1/2"
      }
    ];
    return data;
  }

}
