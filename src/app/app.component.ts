import { Component, OnInit } from "@angular/core";
import { Router, NavigationStart, NavigationEnd, NavigationError, NavigationCancel, RoutesRecognized } from "@angular/router";
import { Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
    selector: "earc-app",
    templateUrl: "./app/app.component.html"
})
export class AppComponent implements OnInit {

    isNavigating = false;
    constructor(router: Router, @Inject(DOCUMENT) private document) {
        router.events.subscribe(ev => {
            console.log(ev);
            if (ev instanceof NavigationStart) {

               // console.log("Navigation started");

                this.isNavigating = true;
            }
            if (ev instanceof NavigationEnd || ev instanceof NavigationError || ev instanceof NavigationCancel) {

               // console.log("Navigation ended");
                this.isNavigating = false;
            }
        });
    }

    ngOnInit() {
      
    }
}