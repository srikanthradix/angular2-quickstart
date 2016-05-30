import {Component, Input, OnInit} from "@angular/core";
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
        this.heroService.getHero(id).then(hero => this.hero = hero);
    }

    save() {
        this.heroService.saveHero(this.hero)
            .then(hero => {
                this.hero = hero;
                goBack(hero);
            })
            .catch(error => this.error = error);
    }

    @Input()
    hero: Hero;

    goBack(savedHero: Hero = null) {
        this.close.emit(savedHero);
        window.history.back();
    }

    goBack() {
        window.history.back();
    }
}