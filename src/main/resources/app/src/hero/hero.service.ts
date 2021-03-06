import {Injectable} from "@angular/core";
import {Http, Headers, Response} from "@angular/http";
import {HEROES} from "./mock-heroes";
import {Hero} from "./hero";
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HeroService {

    private heroesUrl = "heroes";

    constructor(private http:Http){}

    getHeroes() {
        return Promise.resolve(HEROES);
    }

    getHeroesSlowly (): Promise<Hero[]> {
        let url = `/${this.heroesUrl}/getAll`;
        return this.http.get(url)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    }

    getHero(id:number) {
        let url = `/${this.heroesUrl}/getById/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
        // return Promise.resolve(HEROES).then(heroes => heroes.filter(hero => hero.id === id)[0]);
    }

    saveHero(hero:Hero): Promise<Hero> {
        if(hero && hero.id) {
            return this.put(hero);
        } else {
            Promise.reject('No hero passed');
        }
    }

    private extractData(response: Response) {
        let data = response.json();
        return data || {};
    }

    private handleError(error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Promise.reject(errMsg);
    }

    private put(hero:Hero): Promise<Hero> {
        let url = `/${this.heroesUrl}/save/${hero.id}`;
        let headers = new Headers();
        headers.append('Content-type', 'application/json');
        return this.http.put(url, JSON.stringify(hero), {headers: headers})
            .toPromise()
            .then(() => hero)
            .catch(this.handleError);
    }
}