package com.ohgiraffers.mapping.section03.compositekey.subsection02.idclass;

import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

@Repository
public class CartRepository {

    @PersistenceContext
    private EntityManager manager;


    public void save(Cart cart) {
        manager.persist(cart);
    }
}
