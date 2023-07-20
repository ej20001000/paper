package com.ohgiraffers.mapping.section03.compositekey.subsection01.embeddedid;

import javax.persistence.Column;
import javax.persistence.Embeddable;

@Embeddable
public class LikedBookNo {

    @Column(name = "BOOK_NO")
    private int likedBookNo;

    protected LikedBookNo() {}

    public LikedBookNo(int likedBookNo) {
        this.likedBookNo = likedBookNo;
    }

    public int getLikedBookNo() {
        return likedBookNo;
    }

    public void setLikedBookNo(int likedBookNo) {
        this.likedBookNo = likedBookNo;
    }

    @Override
    public String toString() {
        return "LikedBookNo{" +
                "likedBookNo=" + likedBookNo +
                '}';
    }
}
