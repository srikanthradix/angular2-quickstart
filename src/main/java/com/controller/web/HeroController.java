package com.controller.web;

import com.domain.Hero;
import com.service.HeroService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static org.springframework.web.bind.annotation.RequestMethod.GET;
import static org.springframework.web.bind.annotation.RequestMethod.PUT;

/**
 * Created by srikanth on 5/30/16.
 */
@RestController
@RequestMapping(value = "/heroes")
public class HeroController {

    @Autowired
    private HeroService heroService;

    @RequestMapping(value = "/getAll")
    public List<Hero> getHeroes() {
        return heroService.getHeroes();
    }

    @RequestMapping(method = PUT, value = "/save/{id}")
    @ResponseBody
    public HttpStatus saveHero(@PathVariable Long id, @RequestBody Hero hero) {
        heroService.save(id, hero);
        return HttpStatus.OK;
    }

    @RequestMapping(method=GET, value = "/getById/{id}")
    @ResponseBody
    public Hero getHero(@PathVariable Long id) {
        return heroService.getHero(id);
    }
}
