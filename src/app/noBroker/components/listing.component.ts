import { Component, OnDestroy, OnInit, Inject, forwardRef, trigger, state, style, transition, animate, keyframes, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Response } from '@angular/http';
import { ScrollEvent } from 'ngx-scroll-event';

import { ListingService } from '../service/listing.service';
import { MainComponent } from './main.component';
import { NgForm } from "@angular/forms";
import { Constant } from '../constants/enums';

@Component({
    selector: 'common-login',
    templateUrl: './app/noBroker/templates/listing.component.html',
    // host: { '[@routerTransition]': '' }
})
export class ListingComponent implements OnInit {

    constructor(private router: Router, private listingService: ListingService,
        @Inject(forwardRef(() => MainComponent)) private publicComponent: MainComponent) {
    }

    HotelsList: any = [];
    ApartmentTypeFilter: any = [];
    FurnishedFilter: any = [];
    searchInfo: any = {};
    rangeShort: number = 0;
    rangeLong: number = 500000;
    conf: any = {};
    imagesURL: string = 'http://d3snwcirvb4r88.cloudfront.net/images/';
    showloader: boolean = false;
    isDisable: boolean = true;


    ngOnInit() {
        this.conf.rangeShort = this.rangeShort;
        this.conf.rangeLong = this.rangeLong;
        this.conf.pageNo = "1";
        this.getHotels(this.conf);
    }

    getHotels(conf) {
        this.isDisable = true;
        // this.progressBar.start();
        this.conf.PlaceID = 'ChIJLfyY2E4UrjsRVq4AjI7zgRY';
        this.listingService.getHotels(conf)
            .subscribe(
            (response) => {
                this.searchInfo = response.otherParams;
                this.HotelsList = this.HotelsList.concat(response.data);
                let str_arr = [];
                this.HotelsList.forEach(element => {
                    if (element.photos.length > 0) {
                        //element.photos["0"].imagesMap.fileName = (element.photos["0"].imagesMap.thumbnail).split('_')[0];
                        element.imagesURL = this.imagesURL + (element.photos["0"].imagesMap.thumbnail).split('_')[0] + '/' + (element.photos["0"].imagesMap.thumbnail);
                    }
                });
                // console.log(this.HotelsList);
                this.showloader = false;
                // this.progressBar.complete();
                //this.isDisable = false;
            },
            (error) => { console.log("Error getting hotels list"); this.progressBar.complete(); this.isDisable = false; }
            );
    }

    resetFilters() {
        this.ApartmentTypeFilter = [];
        this.FurnishedFilter = [];
        this.rangeShort = 0;
        this.rangeLong = 500000;
        this.conf = {};
        this.conf.pageNo = "1";
        this.ngOnInit();
    }

    filterHotels(filterType, filter) {
        this.conf.pageNo = "1";
        this.searchInfo = {};
        this.HotelsList = [];
        let index: number;

        if (filterType === Constant.filterType.ApartmentType) {
            index = this.ApartmentTypeFilter.indexOf(filter);
            if (index > -1) {
                this.ApartmentTypeFilter.splice(index, 1);
            } else {
                this.ApartmentTypeFilter.push(filter);
            }
            // console.log(this.ApartmentTypeFilter);
            this.conf.type = "";
            this.ApartmentTypeFilter.forEach(element => {
                this.conf.type = this.conf.type.concat(element.toString() + ',');
            });
            //console.log(this.conf.type);
            this.conf.type = this.conf.type.substring(0, this.conf.type.length - 1);

        } else if (filterType === Constant.filterType.Furnishing) {
            index = this.FurnishedFilter.indexOf(filter);
            if (index > -1) {
                this.FurnishedFilter.splice(index, 1);
            } else {
                this.FurnishedFilter.push(filter);
            }
            this.conf.furnishing = "";
            this.FurnishedFilter.forEach(element => {
                this.conf.furnishing = this.conf.furnishing.concat(element.toString() + ',');
            });
            this.conf.furnishing = this.conf.furnishing.substring(0, this.conf.furnishing.length - 1);
        }

        this.getHotels(this.conf);
    }

    onRentChange(rangeType, value) {
        this.conf.pageNo = "1";
        this.HotelsList = [];
        if (rangeType === Constant.rangeType.short) {
            this.rangeShort = value;
        } else {
            this.rangeLong = value;
        }
        this.conf.rangeShort = this.rangeShort;
        this.conf.rangeLong = this.rangeLong;
        this.getHotels(this.conf);
    }

    rangeValueChanged(event, start: any, end: any) {
        this.conf.pageNo = "1";
        this.HotelsList = [];
        var start_el = this.getElement(start);
        var end_el = this.getElement(end);
        start_el.innerHTML = event.startValue;
        end_el.innerHTML = event.endValue;

        this.conf.rangeShort = start_el.innerHTML;
        this.conf.rangeLong = end_el.innerHTML;
        this.getHotels(this.conf);
    }

    getElement(data) {
        if (typeof (data) == 'string') {
            return document.getElementById(data);
        }
        if (typeof (data) == 'object' && data instanceof Element) {
            return data;
        }
        return null;
    }

    getAddress($event) {
        // console.log($event);
    }

    autoCompleteCallback1(selectedData: any) {
        this.searchInfo = {};
        this.HotelsList = [];
        this.conf = {};
        this.conf.pageNo = "1";
        this.conf.PlaceID = selectedData.place_id;
        this.listingService.getHotels(this.conf)
            .subscribe(
            (response) => {
                this.searchInfo = response.otherParams;
                this.HotelsList = response.data;
                let str_arr = [];
                this.HotelsList.forEach(element => {
                    if (element.photos.length > 0) {
                        //element.photos["0"].imagesMap.fileName = (element.photos["0"].imagesMap.thumbnail).split('_')[0];
                        element.imagesURL = this.imagesURL + (element.photos["0"].imagesMap.thumbnail).split('_')[0] + '/' + (element.photos["0"].imagesMap.thumbnail);
                    }
                });
                // console.log(this.HotelsList);
            },
            (error) => { console.log("Error getting hotels list") }
            );
    }

    public handleScroll(event: ScrollEvent) {
        // console.log('scroll occurred', event.originalEvent);
        if (event.isReachingBottom) {
            //console.log(`the user is reaching the bottom`);
            this.showloader = true;
            this.conf.pageNo++;
            this.getHotels(this.conf);
        }
        if (event.isWindowEvent) {
            // console.log(`This event is fired on Window not on an element.`);
        }

    }

}