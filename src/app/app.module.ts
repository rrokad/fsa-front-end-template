import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackButtonComponent } from './back-button/back-button.component';
import { RushiComponent } from './rushi/rushi.component';
import { SmallXComponent } from './small-x/small-x.component';

@NgModule({
  declarations: [
    AppComponent,
    BackButtonComponent,
    RushiComponent,
    SmallXComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
