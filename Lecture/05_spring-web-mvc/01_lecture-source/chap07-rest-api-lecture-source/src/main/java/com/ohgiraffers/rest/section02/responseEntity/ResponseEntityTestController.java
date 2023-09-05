package com.ohgiraffers.rest.section02.responseEntity;

import org.apache.catalina.User;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.*;
import java.util.stream.Collectors;


@RestController
@RequestMapping("/responseEntity")
public class ResponseEntityTestController {

    /* ResponseEntity란?
     * 결과 데이터와 http 상태 코드를 직접 제어할 수 있는 클래스이다.
     * HttpStatus, HttpHeader, HttpBody 등을 제어할 수 있다.
     */

    private List<UserDTO> users;

    public ResponseEntityTestController() {
        users = new ArrayList<>();

        users.add(new UserDTO(1, "id1", "pwd1", "홍길동", new Date()));
        users.add(new UserDTO(2, "id2", "pwd2", "유관순", new Date()));
        users.add(new UserDTO(3, "id3", "pwd3", "이순신", new Date()));
    }

    @GetMapping("/users")
    public ResponseEntity<ResponseMessage> getUsers() {

        HttpHeaders headers = new HttpHeaders();

        // Content-Type : "application/json;charset=UTF-8"
        headers.setContentType(new MediaType("application", "json", java.nio.charset.Charset.forName("UTF-8")));

        Map<String, Object> responseMap = new HashMap<>();

        responseMap.put("users", users);

        ResponseMessage responseMessage = new ResponseMessage(200, "success", responseMap);

        return new ResponseEntity<>(responseMessage, headers, org.springframework.http.HttpStatus.OK);
    }

    @GetMapping("/users/{userNo}")
    public ResponseEntity<ResponseMessage> findUserByNo(@PathVariable int userNo) {

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(new MediaType("application", "json", java.nio.charset.Charset.forName("UTF-8")));

        UserDTO foundUser = users.stream().filter(user -> user.getNo() == userNo).findFirst().orElse(null);

        Map<String, Object> responseMap = new HashMap<>();
        responseMap.put("user", foundUser);

        return ResponseEntity.ok()
                .headers(headers)
                .body(new ResponseMessage(200, "success", responseMap));
    }

    @PostMapping("/users")
    public ResponseEntity<?> registUser(@RequestBody UserDTO newUser) {

        System.out.println(newUser);

        int lastUserNo = users.get(users.size() - 1).getNo();
        newUser.setNo(lastUserNo + 1);

        users.add(newUser);

        return ResponseEntity
                .created(URI.create("/responseEntity/users/" + newUser.getNo()))
                .build();
    }

    @PutMapping("/users/{userNo}")
    public ResponseEntity<?> modifyUser(@RequestBody UserDTO modifyInfo, @PathVariable int userNo) {

        UserDTO foundUser = users.stream().filter(user -> user.getNo() == userNo).findFirst().orElse(null);

        foundUser.setId(modifyInfo.getId());
        foundUser.setPwd(modifyInfo.getPwd());
        foundUser.setName(modifyInfo.getName());

        return ResponseEntity
                .created(URI.create("/responseEntity/users/" + userNo))
                .build();
    }

    @DeleteMapping("/users/{userNo}")
    public ResponseEntity<?> deleteUser(@PathVariable int userNo) {

        UserDTO foundUser = users.stream().filter(user -> user.getNo() == userNo).findFirst().orElse(null);

        users.remove(foundUser);

        return ResponseEntity
                .noContent()
                .build();
    }
}
