import {Component, OnInit} from "@angular/core";
import { Router } from '@angular/router-deprecated';
import {Hero} from "./hero";
import {HeroService} from "./hero.service";
/**
 * Created by srikanth on 5/29/16.
 */

@Component({
    selector: 'my-dashboard',
    templateUrl: 'app/html/dashboard.component.html',
    styleUrls: ['app/css/dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    heroes: Hero[] = [];

    constructor(private heroService : HeroService, private router: Router) {}

    ngOnInit() {
        this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes.slice(1, 5));
    }

    gotoDetail(hero: Hero) {
        let link = ['HeroDetail', {id: hero.id}];
        this.router.navigate(link);
    }

}