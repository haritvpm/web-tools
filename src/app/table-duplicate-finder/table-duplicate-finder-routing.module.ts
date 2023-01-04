import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableDuplicateFinderComponent } from './table-duplicate-finder.component';

const routes: Routes = [{ path: '', component: TableDuplicateFinderComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TableDuplicateFinderRoutingModule { }
