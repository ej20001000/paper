package com.ohgiraffers.mapping.section02.embedded;

import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;


@Repository
public class BookRepository {
    @PersistenceContext
    private EntityManager manager;

    public void save(Book book) {
        manager.persist(book);
    }
}
