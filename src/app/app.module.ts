import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { Routing } from './app.routing';
import { NoBrokerModule } from './noBroker/noBroker.module';

import { ToasterModule, ToasterService, ToasterConfig } from 'angular2-toaster';


@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        Routing,
        NoBrokerModule,
        ToasterModule,
    ],
    declarations: [
        AppComponent,
    ],
    providers: [ToasterService],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor() {
      
    };
}