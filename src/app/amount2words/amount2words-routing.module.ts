import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Amount2wordsComponent } from './amount2words.component';

const routes: Routes = [{ path: '', component: Amount2wordsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Amount2wordsRoutingModule { }
