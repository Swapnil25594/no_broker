import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule, JsonpModule, BrowserXhr } from '@angular/http';


import { ScrollEventModule } from 'ngx-scroll-event';
import { Ng4GeoautocompleteModule } from 'ng4-geoautocomplete';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';

import { ListingComponent } from './components/listing.component';
import { MainComponent } from './components/main.component';

// import { GooglePlaceModule } from 'ng2-google-place-autocomplete';

import { ListingService } from './service/listing.service';
import { NoBrokerRouting } from './noBroker.routing';

@NgModule({
    imports: [ScrollEventModule, SlimLoadingBarModule, CommonModule, Ng4GeoautocompleteModule.forRoot(), FormsModule, RouterModule, HttpModule, JsonpModule, NoBrokerRouting],
    declarations: [ListingComponent, MainComponent],
    providers: [ListingService],
    exports: [ListingComponent, MainComponent]
})
export class NoBrokerModule { }
