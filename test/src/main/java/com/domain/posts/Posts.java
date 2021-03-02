package com.domain.posts;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Getter
@NoArgsConstructor  //기본 생성자 자동 추가
/*
* @Entity
* 테이블과 링크될 클래스 기본값으로 클래스의 카멜케이스 이름을 언더스코어 네이밍(_)으로 테이블 이름을 매칭합니다.
* ex)simpleTest.java => simple_test
* */
@Entity
public class Posts {
  @Id //해당 테이블의 PK
  //PK의 생성 규칙을 나타냅니다. GenerationType.IDENTITY 은 auto increment와 동일합니다.
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private long id;

  /*
  * 이 어노테이션을 굳이 설정하지 않아도 해당 클래스의 필드는 모두 테이블의 컬럼이 됩니다.
  * 그래도 사용하는 이유는 기본값 외에 추가로 변경이 필요한 옵션이 있으면 사용합니다.
  * 문자열의 경우 VARCHAR(255)가 기본값인데, 사이즈를 500으로 늘리고 싶은 경우 등에서 사용됩니다.
  * */
  @Column(length = 500, nullable = false)
  private String title;

  @Column(columnDefinition = "TEXT", nullable = false)
  private String content;
  private String author;

  @Builder
  public Posts(Long id, String title, String content, String author){
    this.id = id;
    this.title = title;
    this.content = content;
    this.author = author;
  }

}
