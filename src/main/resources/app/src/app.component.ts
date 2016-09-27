import {Component} from "@angular/core";
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {HeroesComponent} from "./hero/heroes.component";
import {HeroService} from "./hero/hero.service";
import {HeroDetailComponent} from "./hero/hero-detail.component";

/**
 * Created by srikanth on 5/28/16.
 */

@Component({
    selector: 'my-app',
    directives: [ROUTER_DIRECTIVES],
    providers: [HeroService, ROUTER_PROVIDERS],
    template: `<h1>{{title}}</h1>
    <nav>
        <a [routerLink]="['Dashboard']">Dashboard</a>
        <a [routerLink]="['Heroes']">Heroes</a>
    </nav>
    <router-outlet></router-outlet>`
})
@RouteConfig([
    {
        path: '/heroes',
        name: 'Heroes',
        component: HeroesComponent
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: DashboardComponent,
        useAsDefault: true
    },
    {
        path: '/detail:id',
        name: 'HeroDetail',
        component: HeroDetailComponent
    }
])
export class AppComponent {
    title = "Tour of Heroes";
}