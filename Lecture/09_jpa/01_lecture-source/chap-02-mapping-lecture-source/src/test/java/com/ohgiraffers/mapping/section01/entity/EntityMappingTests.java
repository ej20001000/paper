package com.ohgiraffers.mapping.section01.entity;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.Arguments;
import org.junit.jupiter.params.provider.MethodSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.time.LocalDateTime;
import java.util.stream.Stream;

@SpringBootTest
public class EntityMappingTests {

    /*
        엔티티와 테이블을 정확하게 매핑하는 것이 JPA의 핵심이다.
        매핑 어노테이션은 크게 4가지로 분류할 수 있다.
        1. 객체와 테이블 매핑 (@Entity, @Table)
        2. 기본키 매핑 (@Id)
        3. 필드와 컬럼 매핑 (@Column)
        4. 연관관계 매핑 (@ManyToOne, @OneToMany, @ManyToMany, @OneToOne, @JoinColumn, @JoinTable)
     */

    @Autowired
    private MemberRegistService memberRegistService;


    private static Stream<Arguments> createMember() {
        return Stream.of(
                Arguments.of(
                        1,
                        "user01",
                        "pass01",
                        "홍길동",
                        "010-1234-5678",
                        "서울시 서초구",
                        LocalDateTime.now(),
                        "ROLE_MEMBER",
                        "Y"
                ),
                Arguments.of(
                        2,
                        "user02",
                        "pass02",
                        "유관순",
                        "010-1234-3131",
                        "서울시 서초구",
                        LocalDateTime.now(),
                        "ROLE_ADMIN",
                        "Y"
                )
        );
    }

    @DisplayName("테이블 만들기 테스트")
    @ParameterizedTest
    @MethodSource("createMember")
    void testCreateTable(int memberNo, String memberId, String memberPwd, String memberName, String phone, String address, LocalDateTime enrollDate, MemberRole memberRole, String status){
        MemberRegistDTO memberInfo = new MemberRegistDTO(
                memberId,
                memberPwd,
                memberName,
                phone,
                address,
                enrollDate,
                memberRole,
                status
        );

        Assertions.assertDoesNotThrow(
                () -> memberRegistService.registMember(memberInfo)
        );
    }

}
