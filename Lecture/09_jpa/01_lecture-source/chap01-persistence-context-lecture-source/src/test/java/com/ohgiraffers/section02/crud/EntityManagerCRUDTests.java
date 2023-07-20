package com.ohgiraffers.section02.crud;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.Arguments;
import org.junit.jupiter.params.provider.CsvSource;
import org.junit.jupiter.params.provider.MethodSource;
import org.junit.jupiter.params.provider.ValueSource;

import javax.persistence.EntityTransaction;
import java.util.stream.Stream;

public class EntityManagerCRUDTests {

    private EntityManagerCRUD manager;

    @BeforeEach
    void initManager() {
        this.manager = new EntityManagerCRUD();
    }

    @ParameterizedTest
    @CsvSource({"1,1", "2,2", "3,3"})
    void testFindMethodByMenuCode(int menuCode, int expected) {

        //when
        Menu menu = manager.findMenuByMenuCode(menuCode);

        //then
        Assertions.assertEquals(expected, menu.getMenuCode());
    }

    private static Stream<Arguments> newMenu() {
        return Stream.of(
                Arguments.of(
                        "새로운 메뉴",
                        30000,
                        4,
                        "Y"
                )
        );
    }

    @DisplayName("새로운 메뉴 추가 테스트")
    @ParameterizedTest
    @MethodSource("newMenu")
    void testRegistMenu(String menuName, int menuPrice, int categoryCode, String orderableStatus) {

        //when
        Long count = manager.saveAndReturnAllCount(menuName, menuPrice, categoryCode, orderableStatus);

        //then
        Assertions.assertEquals(24, count);
    }

    @AfterEach
    void rollback() {
        EntityTransaction transaction = manager.getManagerInstance().getTransaction();
        transaction.rollback();
    }

    @DisplayName("메뉴 이름 수정 테스트")
    @ParameterizedTest
    @CsvSource("1,민트미역국")
    void testModifyMenuName(int menuCode, String menuName) {

        //when
        Menu menu = manager.modifyMenuName(menuCode, menuName);

        //then
        Assertions.assertEquals(menuName, menu.getMenuName());
    }

    @DisplayName("메뉴 삭제하기 테스트")
    @ParameterizedTest
    @ValueSource(ints = {1})
    void testRemoveMenu(int menuCode) {

        //when
        Long count = manager.removeAndReturnAllCount(menuCode);

        //then
        Assertions.assertEquals(22, count);
    }
}
