import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableDuplicateFinderRoutingModule } from './table-duplicate-finder-routing.module';
import { TableDuplicateFinderComponent } from './table-duplicate-finder.component';
import { SharedModule } from '../shared/shared.module';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    TableDuplicateFinderComponent
  ],
  imports: [
    CommonModule,
    TableDuplicateFinderRoutingModule, SharedModule, MatButtonModule
  ]
})
export class TableDuplicateFinderModule { }
