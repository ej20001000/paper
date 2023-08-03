package com.ohgiraffers.mapping.section03.compositekey.subsection02.idclass;

import java.io.Serializable;

public class CompsiteKey implements Serializable {

    private int cartOwner;
    private int addedBook;

    protected CompsiteKey() {}

    public CompsiteKey(int cartOwner, int addedBook) {
        this.cartOwner = cartOwner;
        this.addedBook = addedBook;
    }
}
