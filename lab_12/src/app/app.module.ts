import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ElementosModule } from './elementos/elementos.module'
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ElementosModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
