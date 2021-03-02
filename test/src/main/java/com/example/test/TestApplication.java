package com.example.test;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import static org.springframework.web.servlet.FrameworkServlet.DEFAULT_CONTEXT_CLASS;

@SpringBootApplication
public class TestApplication {

  private static final String[] param = {};

  public static void main(String[] args) {
    String a = "aaaa";

    SpringApplication.run(DEFAULT_CONTEXT_CLASS);

    System.out.println(a);

  }

}
