import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  people:any = {
    title:'People',
    titleLink:'Browse all videos',
    arrayData:[{
      title:'How to Improve your skills',
      user:'Wseem Arshad',
      views:144424
    },{
      user:'Jhon Stainer',
    },{
      user:'Jhon Doe',
    },{
      user:'Micheal Knight',
    },{
      user:'Ahmed Yasin',
    },],
    iconWidget:'fa-dot-circle-o',
    titleWidget:{
      first:'Show',
      last:'Your Work'
    }
  }
  documents:any = {
    title:'Documents',
    titleLink:'Browse all documents',
    arrayData:[{
      title:'Mobile ui & ux guide 2013',
      user:'William Makhoja',
      views:144424
    },{
      title:'2013 marketing treads',
      views:223231
    },{
      title:'2013 marketing treads',
      views:4421
    },{
      title:'HTML 5 and usage',
      views:55677
    },{
      title:'How to become an expert?',
      views:999
    },],
    iconWidget:'fa-plus-circle',
    titleWidget:{
      first:'Share',
      last:'Your Document'
    }
  }
}
