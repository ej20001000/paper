package com.ohgiraffers.mapping.section03.compositekey.subsection01.embeddedid;

import javax.persistence.Embeddable;
import javax.persistence.Embedded;
import java.io.Serializable;

@Embeddable
public class LikeCompositeKey implements Serializable {

    @Embedded
    private LikedMemberNo memberNo;

    @Embedded
    private LikedBookNo bookNo;

    protected LikeCompositeKey() {}

    public LikeCompositeKey(LikedMemberNo memberNo, LikedBookNo bookNo) {
        this.memberNo = memberNo;
        this.bookNo = bookNo;
    }

    public LikedMemberNo getMemberNo() {
        return memberNo;
    }

    public LikedBookNo getBookNo() {
        return bookNo;
    }

    @Override
    public String toString() {
        return "LikeCompositeKey{" +
                "memberNo=" + memberNo +
                ", bookNo=" + bookNo +
                '}';
    }
}
