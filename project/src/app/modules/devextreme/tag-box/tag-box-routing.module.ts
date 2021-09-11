import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// COMPONENTS  
import { TagBoxComponent } from './tag-box.component';

const routes: Routes = [{
  path: '',  component: TagBoxComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TagBoxRoutingModule { }
