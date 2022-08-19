package com.example.demo.student;

import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.Month;

@Service
public class StudentService {

    public Student[] getStudents() {
        Student[] a = {new Student(
                1L,
                "Marian",
                "marian.jamal@gmail.com",
                LocalDate.of(2000,
                        Month.JANUARY,
                        5),
                21)};
        return a;
    }

}
