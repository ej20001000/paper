package com.ohgiraffers.section03.entity;

import javax.persistence.EntityManager;

public class EntityLifeCycle {

    private EntityManager manager;
    public Menu findMenuByMenuCode(int menuCode) {

        manager = EntityManagerGenerator.getManagerInstance();

        return manager.find(Menu.class, menuCode);
    }
}
