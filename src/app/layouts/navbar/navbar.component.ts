import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  obj:any = {
    titleOne:'Social',
    titleTwo:'Network',
    profile:{
      firstName:'Waseem',
      lastName:'Arshad',
      initial:'WA'
    },
    nav:[{
      name:'Videos',
      link:'home#videos',
      active:false,
    },{
      name:'People',
      link:'home#people',
      active:false,
    },{
      name:'Documents',
      link:'home#documents',
      active:false,
    },{
      name:'Events',
      link:'home#events',
      active:false,
    },{
      name:'Communities',
      link:'home#communities',
      active:false,
    },{
      name:'Favorites',
      link:'home#favorites',
      active:false,
    },{
      name:'Channels',
      link:'home#channels',
      active:false,
    }]
  }
  changeActive(item:any){
    this.obj.nav.forEach((v:any) => {
      v.active = false;
      return v;
    });
    item.active = true;
  }
}
