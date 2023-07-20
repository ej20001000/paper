package com.ohgiraffers.mapping.section03.compositekey.subsection01.embeddedid;

import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

@Repository
public class LikeRepository {

    @PersistenceContext
    private EntityManager manager;

    public void save(Like like) {
        manager.persist(like);
    }
}
