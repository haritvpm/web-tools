import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Amount2wordsRoutingModule } from './amount2words-routing.module';
import { Amount2wordsComponent } from './amount2words.component';
import { SharedModule } from '../shared/shared.module';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    Amount2wordsComponent
  ],
  imports: [
    CommonModule,
    Amount2wordsRoutingModule,
    SharedModule,
    MatButtonModule
  ]
})
export class Amount2wordsModule { }
