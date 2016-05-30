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
    public List<Hero> getHeroes() {
        String[][] heroes = new String[][]{
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

        List<Hero> heros = new ArrayList<>();
        for (int i = 0; i< heroes.length; i++) {
            Hero hero = new Hero(Long.valueOf(heroes[i][0]), heroes[i][1]);
            heros.add(hero);
        };

        return heros;
    }
}
