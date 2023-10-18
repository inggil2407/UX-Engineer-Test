import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { VideosComponent } from './videos/videos.component';
import { PipesModule } from '../@pipes/pipes.module';
import { ActivityComponent } from './activity/activity.component';
import { WidgetComponent } from './widget/widget.component';
import { ChannelsComponent } from './channels/channels.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    PipesModule,
  ],
  declarations: [
    VideosComponent,
    ActivityComponent,
    WidgetComponent,
    ChannelsComponent,
  ],
  exports: [
    VideosComponent,
    ActivityComponent,
    WidgetComponent,
    ChannelsComponent,
  ]
})
export class ComponentsModule { }
