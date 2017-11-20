import { Component, OnInit, ViewChild, ElementRef, trigger, state, style, transition, animate, keyframes } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
@Component({
    selector: 'public',
    templateUrl: './app/noBroker/templates/main.component.html',
})
export class MainComponent implements OnInit {


    constructor(private router: Router, @Inject(DOCUMENT) private document) {

    }
    ngOnInit() {

    }
    onActivate(e, outlet) {
        outlet.scrollTop = 0;
    }

}