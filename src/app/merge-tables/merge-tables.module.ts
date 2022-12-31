import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MergeTablesRoutingModule } from './merge-tables-routing.module';
import { MergeTablesComponent } from './merge-tables.component';
import { TableComponent } from '../components/table/table.component';


@NgModule({
  declarations: [
    MergeTablesComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    MergeTablesRoutingModule
  ]
})
export class MergeTablesModule { }
