import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { ParentComponent } from './parent/parent.component';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import { WrapperComponent } from "src/app/wrapper";

@NgModule({
  declarations: [
    ParentComponent,
    Component1Component,
    Component2Component,
    WrapperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [WrapperComponent]
})
export class AppModule { }
