package com.ohgiraffers.mapping.section03.compositekey.subsection01.embeddedid;

public class LikeDTO {

    private int likedMemberNo;
    private int linkedBookNo;

    public LikeDTO(int likedMemberNo, int linkedBookNo) {
        this.likedMemberNo = likedMemberNo;
        this.linkedBookNo = linkedBookNo;
    }

    public int getLikedMemberNo() {
        return likedMemberNo;
    }

    public int getLinkedBookNo() {
        return linkedBookNo;
    }

    public void setLikedMemberNo(int likedMemberNo) {
        this.likedMemberNo = likedMemberNo;
    }

    public void setLinkedBookNo(int linkedBookNo) {
        this.linkedBookNo = linkedBookNo;
    }
}
