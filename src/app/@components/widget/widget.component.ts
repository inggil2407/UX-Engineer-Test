import { Component, Input } from '@angular/core';

@Component({
  selector: 'component-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss']
})
export class WidgetComponent {
  @Input('title') title:string = 'Documents';
  @Input('titleLink') titleLink:string = 'Browse all documents'
  @Input('arrayData') arrayData:any[] = [{
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
  },]
  @Input('iconWidget') iconWidget:string = 'fa-plus-circle';
  @Input('titleWidget') titleWidget:any = {
    first:'Share',
    last:'Your Document'
  };

  id:string = '';
  ngOnInit(){
    this.id = this.title.toLowerCase().trim();
  }
}
