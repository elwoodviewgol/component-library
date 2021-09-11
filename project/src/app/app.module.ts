import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

// LIBRARY  
import { MaterialModule } from '../assets/libs/material/material.module';
import { DevextremeModule } from '../assets/libs/devextreme/devextreme.module';

// ROUTING
import { AppRoutingModule } from './app-routing.module'; 

// COMPONENTS  
import { AppComponent } from './app.component';
import { AppIndexComponent } from './components/app-index/app-index.component';
import { AppNotFoundComponent } from './components/app-not-found/app-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    AppIndexComponent,
    AppNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    DevextremeModule,
    FlexLayoutModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


// -------------------------------------  
// "DevExtreme + Angular Material" project
// Author: Elwood Berry, Senior Frontend Developer @ eberry@viewgol.com
// @2021 