package com.ohgiraffers.section03.entity;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.Arguments;
import org.junit.jupiter.params.provider.CsvSource;
import org.junit.jupiter.params.provider.MethodSource;
import org.junit.jupiter.params.provider.ValueSource;

import javax.persistence.Entity;
import javax.persistence.EntityManager;
import javax.persistence.EntityTransaction;
import java.util.stream.Stream;

public class EntityLifeCycleTests {

    /* 필기.
    *   영속성 컨텍스트(persistence context)
    *   엔티티 매니저가 엔티티 객체를 저장하는 공간으로 엔티티 객체를 보관하고 관리한다.
    *   (엔티티 매니저가 생성될 때 하나의 영속성 컨텍스트가 만들어진다.)
    * */
    
    /* 필기.
    *   엔티티의 생명주기
    *   비영속(new / transient) : 영속성 컨텍스트와 전혀 관계가 없는 상태. (식별자가 존재하지 않을 수 있다.)
    *   영속(managed) : 영속성 컨텍스트에 저장된 상태
    *   준영속(detached) : 영속성 컨텍스트에 저장되었다가 분리된 상태
    *   삭제(removed) : 삭제된 상태
    * */

    private EntityLifeCycle lifeCycle;

    @BeforeEach
    void setup() {
        this.lifeCycle = new EntityLifeCycle();
    }

    @DisplayName("비영속성 테스트")
    @ParameterizedTest
    @ValueSource(ints = {1, 2})
    void testTransient(int menuCode) {

        //when
        Menu foundMenu = lifeCycle.findMenuByMenuCode(menuCode);

        //then
        Menu newMenu = new Menu(
                menuCode,
                foundMenu.getMenuName(),
                foundMenu.getMenuPrice(),
                foundMenu.getCategoryCode(),
                foundMenu.getOrderableStatus()
        );

        Assertions.assertNotEquals(foundMenu, newMenu);
    }

    @DisplayName("다른 엔티티 매니저가 관리하는 엔티티의 영속성 조회 테스트")
    @ParameterizedTest
    @ValueSource(ints = {1, 2, 3})
    void testManagedOtherEntityManager(int menuCode) {

        //when
        Menu menu1 = lifeCycle.findMenuByMenuCode(menuCode);
        Menu menu2 = lifeCycle.findMenuByMenuCode(menuCode);

        //then
        Assertions.assertNotEquals(menu1, menu2);
    }

    @DisplayName("같은 엔티티 매니저가 관리하는 엔티티의 영속성 조회 테스트")
    @ParameterizedTest
    @ValueSource(ints = {1, 2, 3})
    void testManagedSameEntityManager(int menuCode) {

        //given
        EntityManager manager = EntityManagerGenerator.getManagerInstance();

        //when
        Menu menu1 = manager.find(Menu.class, menuCode);
        Menu menu2 = manager.find(Menu.class, menuCode);

        //then
        Assertions.assertEquals(menu1, menu2);
    }

    private static Stream<Arguments> newMenu() {
        return Stream.of(
                Arguments.of("새로운 메뉴", 50000, 4, "Y")
        );
    }

    @DisplayName("엔티티 영속성 추가 테스트")
    @ParameterizedTest
    @MethodSource("newMenu")
    void testManagedNewEntity(String menuName, int menuPrice, int categoryCode, String orderableStatus) {

        //given
        EntityManager manager = EntityManagerGenerator.getManagerInstance();
        EntityTransaction transaction = manager.getTransaction();

        //when
        Menu menu = new Menu(menuName, menuPrice, categoryCode, orderableStatus);

        transaction.begin();
        manager.persist(menu);
        manager.flush();

        //then
        Assertions.assertTrue(manager.contains(menu));
        transaction.rollback();
    }

    @DisplayName("엔티티 속성 변경 테스트")
    @ParameterizedTest
    @CsvSource({"1,메론죽", "2,김치딸기죽"})
    void testManagedEntityModify(int menuCode, String menuName) {

        //given
        EntityManager manager = EntityManagerGenerator.getManagerInstance();
        Menu foundMenu = manager.find(Menu.class, menuCode);
        EntityTransaction transaction = manager.getTransaction();

        //when
        transaction.begin();
        foundMenu.setMenuName(menuName);
        manager.flush();

        //then
        Menu expectedMenu = manager.find(Menu.class, menuCode);
        Assertions.assertEquals(expectedMenu.getMenuName(), foundMenu.getMenuName());
        transaction.rollback();
    }

    @DisplayName("준영속성 detach 테스트")
    @ParameterizedTest
    @CsvSource({"11,1000", "12,1000"})
    void testDetachEntity(int menuCode, int menuPrice) {

        //given
        EntityManager manager = EntityManagerGenerator.getManagerInstance();
        Menu foundMenu = manager.find(Menu.class, menuCode);
        EntityTransaction transaction = manager.getTransaction();

        //when
        transaction.begin();
        manager.detach(foundMenu);
        foundMenu.setMenuPrice(menuPrice);
        manager.flush();

        //then
        Assertions.assertNotEquals(menuPrice, manager.find(Menu.class, menuCode).getMenuPrice());
        transaction.rollback();
    }

    @DisplayName("준영속성 detach 후 다시 영속화 테스트")
    @ParameterizedTest(name = "[{index}] 준영속화된 {0}번 메뉴를 {1}원으로 변경하고 다시 영속화 되는지 확인")
    @CsvSource({"11,1000", "12,1000"})
    void testDetachAndPersist(int menuCode, int menuPrice) {

        //given
        EntityManager manager = EntityManagerGenerator.getManagerInstance();
        Menu foundMenu = manager.find(Menu.class, menuCode);
        EntityTransaction transaction = manager.getTransaction();

        //when
        transaction.begin();
        manager.detach(foundMenu);
        foundMenu.setMenuPrice(menuPrice);

//        manager.persist(foundMenu);
        manager.merge(foundMenu);
        manager.flush();

        //then
        Assertions.assertEquals(menuPrice, manager.find(Menu.class, menuCode).getMenuPrice());
        transaction.rollback();
    }

    @DisplayName("준영속성 clear 테스트")
    @ParameterizedTest
    @ValueSource(ints = {1, 2, 3})
    void testClearPersistenceContext(int menuCode) {

        //given
        EntityManager manager = EntityManagerGenerator.getManagerInstance();
        Menu foundMenu = manager.find(Menu.class, menuCode);

        //when
        manager.clear();

        //then
        Menu expectedMenu = manager.find(Menu.class, menuCode);
        Assertions.assertNotEquals(expectedMenu, foundMenu);
    }

    @DisplayName("준영속성 close 테스트")
    @ParameterizedTest
    @ValueSource(ints = {1})
    void testClosePersistenceContext(int menuCode) {

        //given
        EntityManager manager = EntityManagerGenerator.getManagerInstance();
        Menu foundMenu = manager.find(Menu.class, menuCode);

        //when
        manager.close();

        //then
        Assertions.assertThrows(
                IllegalStateException.class,
                () -> manager.find(Menu.class, menuCode)
        );
    }

    @DisplayName("영속성 엔티티 삭제 remove 테스트")
    @ParameterizedTest
    @ValueSource(ints = {1})
    void testRemoveEntity(int menuCode) {

        //given
        EntityManager manager = EntityManagerGenerator.getManagerInstance();
        Menu foundMenu = manager.find(Menu.class, menuCode);
        EntityTransaction transaction = manager.getTransaction();

        //when
        transaction.begin();
        manager.remove(foundMenu);
        manager.flush();

        //then
        Assertions.assertFalse(manager.contains(foundMenu));
        transaction.rollback();
    }
}
