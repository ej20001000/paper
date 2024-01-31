package com.example.jwtloginpractice;

import com.example.jwtloginpractice.configuration.JwtTokenProvider;
import com.example.jwtloginpractice.user.AuthController;
import com.example.jwtloginpractice.user.JwtAuthenticationResponse;
import com.example.jwtloginpractice.user.LoginRequest;
import com.example.jwtloginpractice.user.UserService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

import java.util.Map;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

public class AuthControllerTest {

    @Mock
    private AuthenticationManager authenticationManager;

    @Mock
    private JwtTokenProvider tokenProvider;

    @Mock
    private UserService userService;

    @InjectMocks
    private AuthController authController;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    public void testAuthenticateUser() {
        // Mock user login request
        LoginRequest loginRequest = new LoginRequest();
        loginRequest.setUsername("testUser");
        loginRequest.setPassword("testPassword");

        // Mock user authentication
        Authentication authentication = mock(Authentication.class);
        when(authenticationManager.authenticate(any(UsernamePasswordAuthenticationToken.class)))
                .thenReturn(authentication);
        when(authentication.getName()).thenReturn("testUser");

        // Mock JWT token generation
        when(tokenProvider.generateToken("testUser")).thenReturn("mockedJwtToken");

        // Perform the authentication
        ResponseEntity<?> response = authController.authenticateUser(loginRequest);

        // Verify that authentication manager was called
        verify(authenticationManager, times(1)).authenticate(any(UsernamePasswordAuthenticationToken.class));

        // Verify that the response is as expected
        assert response.getStatusCode() == HttpStatus.OK;

        // Cast the response body to a Map
        JwtAuthenticationResponse responseBody = (JwtAuthenticationResponse) response.getBody();

        // Verify that the JWT token is as expected
        assert responseBody.getAccessToken().equals("mockedJwtToken");

        // Verify that the SecurityContextHolder has the authenticated user
        assert SecurityContextHolder.getContext().getAuthentication().equals(authentication);

    }
}
