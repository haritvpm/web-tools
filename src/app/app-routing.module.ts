import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: '', loadChildren: () => import('./merge-tables/merge-tables.module').then(m => m.MergeTablesModule) },

  { path: 'table-duplicate-finder', loadChildren: () => import('./table-duplicate-finder/table-duplicate-finder.module').then(m => m.TableDuplicateFinderModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
