package com.ohgiraffers.mapping.section01.entity;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.Date;

@Entity
@Table(name = "tbl_member")
public class Member {

    @Id
    @Column(name = "MEMBER_NO")
    @GeneratedValue(strategy = GenerationType.IDENTITY)             //auto increment 사용
    private int memberNo;


    @Column(name = "MEMBER_ID", unique = true, nullable = false, columnDefinition = "varchar(10)")
    private String memberId;

    @Column(name = "MEMBER_PWD", nullable = false)
    private String memberPwd;

    @Column(name = "MEMBER_NAME")
    private String memberName;

    @Column(name = "PHONE")
    private String phone;

    @Column(name = "ADDRESS", length = 500)
    private String address;

    @Column(name = "ENROLL_DATE")
//    @Temporal(TemporalType.TIMESTAMP)             // java.util.Date or java.util.Calandar만 사용 가능
    private LocalDateTime enrollDate;


    @Column(name = "MEMBER_ROLE")
//    @Enumerated(EnumType.STRING)                //문자열매핑
    @Enumerated(EnumType.ORDINAL)                 //숫자매핑
    private MemberRole memberRole;

    @Column(name = "STATUS", columnDefinition = "char (1) default 'Y'")
    private String status;

    protected Member() {}

    public Member(String memberId, String memberPwd, String memberName, String phone, String address, LocalDateTime enrollDate, MemberRole memberRole, String status) {
        this.memberId = memberId;
        this.memberPwd = memberPwd;
        this.memberName = memberName;
        this.phone = phone;
        this.address = address;
        this.enrollDate = enrollDate;
        this.memberRole = memberRole;
        this.status = status;
    }
}
