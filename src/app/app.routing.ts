import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";


const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/public/noBroker',
        pathMatch: 'full'
    }

];

//export const appRoutingProviders: any[] = [];
export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
