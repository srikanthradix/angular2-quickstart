import {Component, EventEmitter, Input, Output, OnInit} from "@angular/core";
import {Hero} from "./hero";
import {HeroService} from "./hero.service";
import { RouteParams } from '@angular/router-deprecated';

@Component({
    selector: 'my-hero-detail',
    templateUrl: 'app/html/hero-detail.component.html',
    styleUrls: ['app/css/hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

    constructor(private heroService : HeroService, private routeParams: RouteParams) {}

    ngOnInit() {
        let id = +this.routeParams.get('id');
        if(id) {
            this.navigated = true;
            this.heroService.getHero(id).then(hero => this.hero = hero);
        } else {
            this.navigated = false;
            this.hero = new Hero();
        }
    }

    save() {
        this.heroService.saveHero(this.hero)
            .then(hero => {
                this.hero = hero;
                this.goBack(hero);
            })
            .catch(error => this.error = error);
    }

    @Input() hero: Hero;
    @Output() close = new EventEmitter();
    error: any;
    navigated = false;


    goBack(savedHero: Hero = null) {
        this.close.emit(savedHero);
        if(this.navigated) {
            this.back();
        }
    }

    back() {
        window.history.back();
    }
}