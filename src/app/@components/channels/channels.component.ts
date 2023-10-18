import { Component } from '@angular/core';

@Component({
  selector: 'component-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.scss']
})
export class ChannelsComponent {
  title:string = 'Channels';
  titleLink:string = 'Browse all channels';
  arrayData:any[] = [{
    name:'Google',
    hover:false,
  },{
    name:'Dribble',
    hover:false,
  },{
    name:'Microsoft',
    hover:false,
  },{
    name:'Binance',
    hover:false,
  },{
    name:'Weather Channel',
    hover:false,
  },{
    name:'Gurus',
    hover:false,
  },{
    name:'iMedia',
    hover:false,
  },{
    name:'Creativeye',
    hover:false,
  },{
    name:'Khan Studio',
    hover:false,
  },{
    name:'Yahoo!',
    hover:false,
  }]
}
