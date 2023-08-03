package com.ohgiraffers.mapping.section01.entity;

import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

@Repository
public class MemberRepository {

    @PersistenceContext
    private EntityManager manager;

    public void save(Member member){

        manager.persist(member);
    }
}
