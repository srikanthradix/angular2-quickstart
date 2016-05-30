package com.domain;

import com.google.common.base.Objects;

/**
 * Created by srikanth on 5/30/16.
 */
public class Hero {
    private Long id;
    private String name;
    public Hero() {}
    public Hero(Long id, String name) {
        this.id = id;
        this.name = name;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Hero hero = (Hero) o;
        return Objects.equal(id, hero.id);
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(id);
    }
}
