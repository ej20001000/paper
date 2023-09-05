package com.ohgiraffers.rest.section01.response;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/response")
public class ResponseRestController {

    @GetMapping("/hello")
//    @ResponseBody
    public String hello() {
        return "good";
    }

    @GetMapping("/random")
    public int getRandomNumber() {
        return (int) (Math.random() * 10) + 1;
    }

    @GetMapping("/message")
    public Message getMessage() {
        // GSON & Jackson -> Message2Converter
        return new Message(200, "good");
    }

    @GetMapping("/list")
    public List<String> getList() {

        return List.of(new String[] {"사과", "바나나", "포도"});
    }

    @GetMapping("/map")
    public Map<Integer, String> getMapping() {
        List<Message> messageList = new ArrayList<>();

        messageList.add(new Message(200, "good"));
        messageList.add(new Message(201, "bad"));
        messageList.add(new Message(202, "soso"));

        return messageList.stream().collect(Collectors.toMap(Message::getHttpStatusCode, Message::getMessage));
    }

    // produces는 response header의 content-type을 지정한다.
    @GetMapping(value = "/image", produces = MediaType.IMAGE_PNG_VALUE)
    public byte[] getImage() throws IOException {
        return getClass().getResourceAsStream("/static/rest.PNG").readAllBytes();
    }

    @GetMapping("/entity")
    public ResponseEntity<Message> getEntity() {
        return ResponseEntity.ok(new Message(200, "good"));
    }
}
