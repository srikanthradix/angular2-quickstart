import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router-deprecated';
import {Hero} from "./hero";
import {HeroDetailComponent} from "./hero-detail.component";
import {HeroService} from "./hero.service";

@Component({
    selector: 'my-heroes',
    directives: [HeroDetailComponent],
    providers: [HeroService],
    template: `
    <!--<my-hero-detail [hero]="selectedHero"></my-hero-detail>-->
    <h2>My Heroes</h2>
    <ul class="heroes">
        <li *ngFor="let hero of heroes"
            [class.selected]="hero === selectedHero"
            (click)="onSelect(hero)">
            <span class="badge">{{hero.id}}</span> {{hero.name}}
        </li>
    </ul>
    <div *ngIf="saveHero">
        <my-hero-detail (close)="close($event)"></my-hero-detail>
    </div>
    <div *ngIf="selectedHero">
        {{selectedHero.name | uppercase}} is my hero
        <button (click)="gotoDetail()">View Details</button>
    </div>`
})
export class HeroesComponent implements OnInit {

    ngOnInit() {
        this.getHeroes();
    }

    constructor(private heroService: HeroService, private router: Router) {}

    // hero:Hero = {
    //     id: 1,
    //     name: 'Storm'
    // };
    selectedHero: Hero;
    heroes : Hero[];
    saveHero = false;

    onSelect(hero: Hero) {
        this.selectedHero = hero;
    }

    getHeroes() {
        this.heroService.getHeroesSlowly().then(heroes => { this.heroes = heroes } );
    }

    gotoDetail() {
        let link = ['HeroDetail', {id: this.selectedHero.id}];
        this.saveHero = true;
        this.router.navigate(link);
    }

    close(savedHero: Hero) {
        console.log("Saved Hero:"+savedHero);
    }
}
