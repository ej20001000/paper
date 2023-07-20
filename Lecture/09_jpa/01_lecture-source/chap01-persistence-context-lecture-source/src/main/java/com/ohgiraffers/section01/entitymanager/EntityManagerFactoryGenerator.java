package com.ohgiraffers.section01.entitymanager;

import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

public class EntityManagerFactoryGenerator {

    private static EntityManagerFactory factory = Persistence.createEntityManagerFactory("ohgiraffers");

    private EntityManagerFactoryGenerator() {}

    public static EntityManagerFactory getInstance() {

        return factory;
    }
}
