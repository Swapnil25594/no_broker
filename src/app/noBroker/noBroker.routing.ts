import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";


import { ListingComponent } from "./components/listing.component";

import { MainComponent } from './components/main.component';

const appRoutes: Routes = [
    {
        path: 'public', component: MainComponent,
        children: [
            { path: '', redirectTo: 'noBroker', pathMatch: 'full' },
            { path: 'noBroker', component: ListingComponent },
        ]
    },
];

//export const appRoutingProviders: any[] = [];
export const NoBrokerRouting: ModuleWithProviders = RouterModule.forChild(appRoutes);
