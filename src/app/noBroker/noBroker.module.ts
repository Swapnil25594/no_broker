import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule, JsonpModule, BrowserXhr } from '@angular/http';


import { ScrollEventModule } from 'ngx-scroll-event';
import { Ng4GeoautocompleteModule } from 'ng4-geoautocomplete';

import { ListingComponent } from './components/listing.component';
import { MainComponent } from './components/main.component';

import { ListingService } from './service/listing.service';
import { NoBrokerRouting } from './noBroker.routing';

@NgModule({
    imports: [ScrollEventModule, CommonModule, Ng4GeoautocompleteModule.forRoot(), FormsModule, RouterModule, HttpModule, JsonpModule, NoBrokerRouting],
    declarations: [ListingComponent, MainComponent],
    providers: [ListingService],
    exports: [ListingComponent, MainComponent]
})
export class NoBrokerModule { }
