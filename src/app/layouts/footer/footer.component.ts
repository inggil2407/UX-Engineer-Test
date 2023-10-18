import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  year:number = new Date().getFullYear();
  obj:any = {
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
