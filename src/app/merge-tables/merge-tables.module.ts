import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MergeTablesRoutingModule } from './merge-tables-routing.module';
import { MergeTablesComponent } from './merge-tables.component';
import { TableComponent } from '../components/table/table.component';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table'
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    MergeTablesComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    MergeTablesRoutingModule, MatButtonModule, MatTableModule, MatCheckboxModule, MatPaginatorModule
  ]
})
export class MergeTablesModule { }
