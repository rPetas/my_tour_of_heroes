import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { ArenaRoutingModule} from "./arena-routing.module";
import { ArenaComponent }  from "../../../view/arena/arena.component";


@NgModule({
  declarations: [
    ArenaComponent
  ],
  imports: [
    HttpClientModule,
    ArenaRoutingModule
  ],
  providers: [],
  bootstrap: [ArenaComponent]
})
export class ArenasModule { }
