import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';



@NgModule({
  declarations: [
    TableComponent
  ],
  imports: [
    CommonModule, MatTableModule, MatCheckboxModule
  ],
  exports: [TableComponent,]
})
export class SharedModule { }
