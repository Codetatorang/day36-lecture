import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home.component';
import { ElephantComponent } from './components/elephant.component';
import { TrexComponent } from './components/trex.component';
import { CustomerComponent } from './components/customer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ElephantComponent,
    TrexComponent,
    CustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
