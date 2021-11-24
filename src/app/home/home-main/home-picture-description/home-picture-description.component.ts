import { Component, OnInit } from '@angular/core';
import { PictureDescription } from './picturedescription';

@Component({
  selector: 'app-home-picture-description',
  templateUrl: './home-picture-description.component.html',
  styleUrls: ['./home-picture-description.component.css']
})
export class HomePictureDescriptionComponent implements OnInit {
  firstpicturelist:PictureDescription[];
  secondpicturelist:PictureDescription[];
  thirdpicturelist:PictureDescription[];
  constructor() { }

  ngOnInit() {
    this.firstpicturelist=this.getFirstPictureDescriptions();
    this.secondpicturelist=this.getSecondPictureDescriptions();
    this.thirdpicturelist=this.getThirdPictureDescriptions();
  }

  getFirstPictureDescriptions() : PictureDescription[] {
    let mockPictureDescriptions:PictureDescription[]=[
      {
        picture:"../../../../assets/img/mountain.976d7294.svg",
        name:"Mountain",
        description:"Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed dignissim uma eu eros facilsis commodo Pellentesque nec sem."
      },
      {
        picture:"../../../../assets/img/tent.4f8d54e3.svg",
        name:"Tent",
        description:"Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed dignissim uma eu eros facilsis commodo Pellentesque nec sem."
      },
      {
        picture:"../../../../assets/img/picnic.7476be12.svg",
        name:"Picnic",
        description:"Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed dignissim uma eu eros facilsis commodo Pellentesque nec sem."
      }
    ];
    return mockPictureDescriptions;
  }
  getSecondPictureDescriptions() : PictureDescription[] {
    let mockPictureDescriptions:PictureDescription[]=[
      {
        picture:"../../../../assets/img/compass.3f44a78a.svg",
        name:"Compass",
        description:"Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed dignissim uma eu eros facilsis commodo Pellentesque nec sem."
      },
      {
        picture:"../../../../assets/img/canteen.ea21a5db.svg",
        name:"Canteen",
        description:"Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed dignissim uma eu eros facilsis commodo Pellentesque nec sem."
      }
    ];
    return mockPictureDescriptions;
  }
  getThirdPictureDescriptions() : PictureDescription[] {
    let mockPictureDescriptions:PictureDescription[]=[
      {
        picture:"../../../../assets/img/forest.7896c60b.svg",
        name:"Forest",
        description:"Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed dignissim uma eu eros facilsis commodo Pellentesque nec sem."
      },
      {
        picture:"../../../../assets/img/pines.c42a9993.svg",
        name:"Pines",
        description:"Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed dignissim uma eu eros facilsis commodo Pellentesque nec sem."
      }
    ];
    return mockPictureDescriptions;
  }
}

