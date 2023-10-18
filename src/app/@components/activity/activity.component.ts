import { Component } from '@angular/core';

@Component({
  selector: 'component-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent {
  title:string = 'Activity';
  titleLink:string = 'View timeline / Filter activites';
  arrayData:any[] = [{
    user:'John Stainer',
    type:'commented',
    text: 'Well, i am liking it how it captures the audio',
    hover:false,
    time:new Date('10/11/2023')
  },{
    user:'John Stainer',
    type:'liked a video',
    text: 'Some marketing tricks',
    hover:false,
    time:new Date('10/11/2023')
  },{
    user:'Arjun',
    type:'commented',
    text: 'How do i start a wibsite design project',
    hover:false,
    time:new Date('10/11/2023')
  },{
    user:'Micheal',
    type:'commented',
    text: 'good video',
    hover:false,
    time:new Date('03/11/2023')
  },{
    user:'Randy',
    type:'liked a video',
    text: 'i so love this video',
    hover:false,
    time:new Date('10/19/2023')
  },{
    user:'John Stainer',
    type:'commented',
    text: 'How to become expert',
    hover:false,
    time:new Date('02/11/2023')
  }]
}
