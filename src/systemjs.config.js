(function (global) {
    System.config({
        paths: {
            // paths serve as alias
            'npm:': 'lib/'
        },
        // map tells the System loader where to look for things
        map: {
            // our app is within the app folder
            app: 'app',
            // angular bundles
            '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
            '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
            '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
            '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
            '@angular/platform-browser/animations': 'npm:@angular/platform-browser/bundles/platform-browser-animations.umd.js',
            '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
            '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
            '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
            '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
            '@angular/animations': 'npm:@angular/animations/bundles/animations.umd.js',
            '@angular/animations/browser': 'npm:@angular/animations/bundles/animations-browser.umd.js',
            // other libraries
            'rxjs': 'npm:rxjs',
            'angular2-toaster': 'npm:angular2-toaster/bundles/angular2-toaster.umd.js',
            'ng2-slim-loading-bar': 'npm:ng2-slim-loading-bar/bundles/index.umd.js',
            'aws-sdk': 'npm:aws-sdk',
            'mydatepicker': 'npm:mydatepicker/bundles/mydatepicker.umd.js',
            'moment': 'npm:moment/min',
            'evaporate': 'npm:evaporate',
            'node-forge': 'npm:node-forge/dist',
            'ng-pick-datetime': 'npm:ng-pick-datetime',
            'ng4-geoautocomplete': 'npm:ng4-geoautocomplete/bundles/ng4-geoautocomplete.umd.min.js',
            'angular2-infinite-scroll': 'npm:angular2-infinite-scroll/angular2-infinite-scroll.js',
            'ng2-slider-component': 'npm:ng2-slider-component',
            'ng2-styled-directive': 'npm:ng2-styled-directive/ng2-styled.directive.js',
            'ng2-slideable-directive': 'npm:ng2-slideable-directive/slideable.directive.js',
            'ngx-scroll-event': 'npm:ngx-scroll-event'
        },
        // packages tells the System loader how to load when no filename and/or no extension
        packages: {
            app: {
                main: './main.js',
                defaultExtension: 'js'
            },
            rxjs: {
                defaultExtension: 'js'
            },
            'aws-sdk': {
                main: 'dist/aws-sdk.min.js',
                defaultExtension: 'js',
                format: 'global'
            },
            'moment': {
                main: 'moment.min.js',
                defaultExtension: 'js'
            },
            'evaporate': {
                main: 'evaporate.js',
                defaultExtension: 'js'
            },
            'node-forge': {
                main: 'forge.min.js',
            },
            'ng-pick-datetime': {
                main: 'picker.bundle.js',
                defaultExtension: 'js'
            },
            'ng2-slider-component': {
                main: 'ng2-slider.component.js',
                defaultExtension: 'js'
            },
            "angular2-infinite-scroll": {
                main: 'angular2-infinite-scroll.js',
                "defaultExtension": "js"
            },
            'ngx-scroll-event': {
                main: 'index.js',
                defaultExtension: 'js'
            }
        }
    });
})(this);