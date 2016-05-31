package com.service;

import com.domain.Hero;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by srikanth on 5/30/16.
 */
@Service
public class HeroService {

    private static final String[][] heroes = new String[][]{
            {"11", "Mr. Nice"},
            {"12", "Narco"},
            {"13", "Bombasto"},
            {"14", "Celeritas"},
            {"15", "Magneta"},
            {"16", "RubberMan"},
            {"17", "Dynama"},
            {"18", "Dr IQ"},
            {"19", "Magma"},
            {"20", "Tornado"}
    };

    public List<Hero> getHeroes() {
        List<Hero> heros = new ArrayList<>();
        for (int i = 0; i< heroes.length; i++) {
            Hero hero = new Hero(Long.valueOf(heroes[i][0]), heroes[i][1]);
            heros.add(hero);
        };

        return heros;
    }

    public Hero getHero(Long id) {
        for(int i = 0; i < heroes.length; i++) {
            if(Long.valueOf(heroes[i][0]) == id) {
                return new Hero(id, heroes[i][1]);
            }
        }
        throw new RuntimeException(String.format("Hero with id: %s not found", id));
    }

    public void save(Long id, Hero hero) {
        boolean updated = false;
        for(int i = 0; i < heroes.length && !updated; i++) {
            if(Long.valueOf(heroes[i][0]) == id) {
                heroes[i][1] = hero.getName();
                updated = true;
            }
        }
        if(!updated) {
            throw new RuntimeException(String.format("Hero with id: %s not found.", id));
        }
    }
}
