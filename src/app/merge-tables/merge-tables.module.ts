import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MergeTablesRoutingModule } from './merge-tables-routing.module';
import { MergeTablesComponent } from './merge-tables.component';
import { MatButtonModule } from '@angular/material/button';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    MergeTablesComponent,

  ],
  imports: [
    CommonModule,
    MergeTablesRoutingModule, MatButtonModule, SharedModule
  ]
})
export class MergeTablesModule { }
