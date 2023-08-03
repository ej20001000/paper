package com.ohgiraffers.mapping.section03.compositekey.subsection02.idclass;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.Arguments;
import org.junit.jupiter.params.provider.MethodSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;


import java.util.stream.Stream;

@SpringBootTest
public class idClassCompositeKeyTests {

    @Autowired
    private CartRegistService cartRegistService;

    private static Stream<Arguments> getCartInfo() {
        return Stream.of(
                Arguments.of(1, 2, 10),
                Arguments.of(2, 3, 10),
                Arguments.of(1, 1, 10),
                Arguments.of(3, 1, 10),
                Arguments.of(3, 2, 10)
        );


    }

    @ParameterizedTest(name = "{0}번 회원이 {1}번 책을 카트에 {2}권 담았는지 테스트")
    @MethodSource("getCartInfo")
    void testAddItemToCart(int cartOwnerMemberNo, int addedBookNo, int quantity){
        CartDTO cartInfo = new CartDTO(cartOwnerMemberNo, addedBookNo, quantity);

        Assertions.assertDoesNotThrow(
                () -> cartRegistService.addItemToCart(cartInfo)
        );
    }
}
