package com.ohgiraffers.mapping.section03.compositekey.subsection02.idclass;

import javax.persistence.*;

@Entity
@Table(name = "TBL_CART")
@IdClass(CompsiteKey.class)
public class Cart {

    @Id
    @Column(name = "CART_OWNER")
    private int cartOwner;

    @Id
    @Column(name = "ADDED_BOOK")
    private int addedBook;

    @Column(name = "QUANTITY")
    private int quantity;

    protected Cart() {}

    @Override
    public String toString() {
        return "Cart{" +
                "cartOwner=" + cartOwner +
                ", addedBook=" + addedBook +
                ", quantity=" + quantity +
                '}';
    }

    public int getCartOwner() {
        return cartOwner;
    }

    public void setCartOwner(int cartOwner) {
        this.cartOwner = cartOwner;
    }

    public int getAddedBook() {
        return addedBook;
    }

    public void setAddedBook(int addedBook) {
        this.addedBook = addedBook;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public Cart(int cartOwner, int addedBook, int quantity) {
        this.cartOwner = cartOwner;
        this.addedBook = addedBook;
        this.quantity = quantity;
    }
}
