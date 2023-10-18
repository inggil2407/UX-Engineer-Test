import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DateAgoPipe } from './date-ago.pipe';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    DateAgoPipe,
  ],
  exports: [
    DateAgoPipe,
  ]
})
export class PipesModule { }
