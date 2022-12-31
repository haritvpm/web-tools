import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MergeTablesRoutingModule } from './merge-tables-routing.module';
import { MergeTablesComponent } from './merge-tables.component';


@NgModule({
  declarations: [
    MergeTablesComponent
  ],
  imports: [
    CommonModule,
    MergeTablesRoutingModule
  ]
})
export class MergeTablesModule { }
