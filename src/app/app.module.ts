import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { Routing } from './app.routing';
import { NoBrokerModule } from './noBroker/noBroker.module';

@NgModule({
    imports: [
        BrowserModule,
        // BrowserAnimationsModule,
        FormsModule,
        Routing,
        NoBrokerModule,
    ],
    declarations: [
        AppComponent,
    ],
    bootstrap: [AppComponent]
})

export class AppModule {
    constructor() {

    };
}