package com.ohgiraffers.mapping.section03.compositekey.subsection01.embeddedid;

import javax.persistence.Column;
import javax.persistence.Embeddable;

@Embeddable
public class LikedMemberNo {

    @Column(name = "LIKED_MEMBER_NO")
    private int likedMemberNo;

    protected LikedMemberNo() {}

    public LikedMemberNo(int likedMemberNo) {
        this.likedMemberNo = likedMemberNo;
    }

    public int getLikedMemberNo() {
        return likedMemberNo;
    }

    public void setLikedMemberNo(int likedMemberNo) {
        this.likedMemberNo = likedMemberNo;
    }

    @Override
    public String toString() {
        return "LikedMemberNo{" +
                "likedMemberNo=" + likedMemberNo +
                '}';
    }
}
