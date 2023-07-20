package com.ohgiraffers.mapping.section02.embedded;

import net.bytebuddy.implementation.bind.annotation.Argument;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.Arguments;
import org.junit.jupiter.params.provider.MethodSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.time.LocalDate;
import java.util.stream.Stream;

@SpringBootTest
public class EmbeddedTests {

    @Autowired
    private BookRegistService bookRegistService;

    private static Stream<Arguments> getBook() {
        return Stream.of(
                Arguments.of(
                        "자바의 정석",
                        "남궁성",
                        "도우출판",
                        LocalDate.now(),
                        30000,
                        0.1
                )
        );
    }

    @ParameterizedTest
    @MethodSource("getBook")
    void testCreateEmbededPriceOfBook(String bookTitle, String author, String publisher, LocalDate publishedDate, int regularPrice, double discountRate){
        BookRegistDTO bookInfo = new BookRegistDTO(bookTitle, author,publisher,publishedDate, regularPrice, discountRate);
        Assertions.assertDoesNotThrow(
                () -> {
                    bookRegistService.registBook(bookInfo);
                }
        );

    }

}
