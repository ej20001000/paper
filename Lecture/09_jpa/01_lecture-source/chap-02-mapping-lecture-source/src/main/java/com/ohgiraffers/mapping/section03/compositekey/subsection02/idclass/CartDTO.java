package com.ohgiraffers.mapping.section03.compositekey.subsection02.idclass;

public class CartDTO {

    private int cartOwnerMemberNo;
    private int addedBookNo;

    private int quantity;

    public CartDTO(int cartOwnerMemberNo, int addedBookNo, int quantity) {
        this.cartOwnerMemberNo = cartOwnerMemberNo;
        this.addedBookNo = addedBookNo;
        this.quantity = quantity;
    }

    @Override
    public String toString() {
        return "CartDTO{" +
                "cartOwnerMemberNo=" + cartOwnerMemberNo +
                ", addedBookNo=" + addedBookNo +
                ", quantity=" + quantity +
                '}';
    }

    public int getCartOwnerMemberNo() {
        return cartOwnerMemberNo;
    }

    public void setCartOwnerMemberNo(int cartOwnerMemberNo) {
        this.cartOwnerMemberNo = cartOwnerMemberNo;
    }

    public int getAddedBookNo() {
        return addedBookNo;
    }

    public void setAddedBookNo(int addedBookNo) {
        this.addedBookNo = addedBookNo;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }
}

