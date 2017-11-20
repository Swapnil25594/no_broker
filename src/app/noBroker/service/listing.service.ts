import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';


import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { API } from '../constants/api';


@Injectable()

export class ListingService {

    constructor(private http: Http) { }

    getHotels(conf: any) {

        let params: URLSearchParams = new URLSearchParams();
        params.set('type', conf.type);
        params.set('furnishing', conf.furnishing);
        if (conf.rangeShort && conf.rangeLong) {
            params.set('rent', conf.rangeShort.toString() + "," + conf.rangeLong.toString());
        }
        params.set('pageNo', conf.pageNo);

        let requestOptions = new RequestOptions();
        requestOptions.search = params;

        let placeID: string;
        placeID = conf.PlaceID;
        console.log(placeID);
        console.log(requestOptions);

        const response$ = this.http.get(API.Url + '/' + placeID, requestOptions);
        return response$.map(res => res.json());
    }

}
