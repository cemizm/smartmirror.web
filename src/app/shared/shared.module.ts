import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  exports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  declarations: []
})
export class SharedModule {
}
