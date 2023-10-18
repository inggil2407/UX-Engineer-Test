import { Component } from '@angular/core';

@Component({
  selector: 'component-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent {
  title:string = 'Videos';
  titleLink:string = 'Browse all videos'
  videoOne:any ={
    title:'How to Improve your skills',
    user:'Wseem Arshad',
    views:144424
  };
  videoTwo:any ={
    user:'Jhon Stainer',
    views:321312
  };
  videoThree:any ={
    user:'Jhon Doe',
    views:923211
  };
  videoFour:any ={
    user:'Micheal Knight',
    views:884232
  };
  videoFive:any ={
    user:'Ahmed Yasin',
    views:552321
  };
}
