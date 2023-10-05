package com.example.jwtloginpractice.user;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@AllArgsConstructor
@Getter
@Setter
public class JwtAuthenticationResponse {
    private String accessToken;

}
