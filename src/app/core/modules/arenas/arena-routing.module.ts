import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArenaComponent }  from "../../../view/arena/arena.component"

const routes: Routes = [
  { path: '', component: ArenaComponent },
  { path: ':id', component: ArenaComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArenaRoutingModule { }
