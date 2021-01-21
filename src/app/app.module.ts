import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { WarningAlertComponent } from './WarningAlert/WarningAlert.component';
import { ServerAlertComponent } from './server-alert/server-alert.component'

@NgModule({
  declarations: [
    AppComponent,
    WarningAlertComponent,
    ServerAlertComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
