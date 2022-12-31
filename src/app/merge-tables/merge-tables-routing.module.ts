import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MergeTablesComponent } from './merge-tables.component';

const routes: Routes = [{ path: '', component: MergeTablesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MergeTablesRoutingModule { }
