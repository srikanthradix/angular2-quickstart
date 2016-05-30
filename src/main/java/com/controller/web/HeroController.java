package com.controller.web;

import com.domain.Hero;
import com.service.HeroService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Created by srikanth on 5/30/16.
 */
@RestController
public class HeroController {

    @Autowired
    private HeroService heroService;

    @RequestMapping(value = "/hero/getHeroes")
    public List<Hero> getHeroes() {
        return heroService.getHeroes();
    }
}
