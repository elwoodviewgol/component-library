import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';

// LIBRARY  
import { MaterialModule } from '../../../../assets/libs/material/material.module';
import { DevextremeModule } from '../../../../assets/libs/devextreme/devextreme.module'; 

// ROUTING  
import { TagBoxRoutingModule } from './tag-box-routing.module';

// COMPONENT 
import { TagBoxComponent } from './tag-box.component';
import { TagBoxAlphaComponent } from './components/tag-box-alpha/tag-box-alpha.component';

@NgModule({
  declarations: [TagBoxComponent, TagBoxAlphaComponent],
  imports: [
    CommonModule,
    TagBoxRoutingModule,
    MaterialModule,
    DevextremeModule,
    FlexLayoutModule
  ]
})
export class TagBoxModule { }
