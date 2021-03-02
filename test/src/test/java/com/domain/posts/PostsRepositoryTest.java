package com.domain.posts;

import com.zaxxer.hikari.HikariConfig;
import com.zaxxer.hikari.HikariDataSource;
import org.junit.After;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.test.context.junit4.SpringRunner;

import javax.sql.DataSource;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

@RunWith(SpringRunner.class)
@Configuration
@PropertySource("classpath:/application.properties")
@SpringBootTest
@SpringBootApplication
public class PostsRepositoryTest {

  /*
  * interface 가 있음에도 autowired 에러가 뜨는 경우
  * SpringContext 를 잡아주는 @SpringBootApplication 어노테이션이 붙은 스타터 클래스가 없었기 때문
  */
  @Autowired
  private PostsRepository postsRepository;

  @Bean
  @ConfigurationProperties(prefix = "spring.datasource.hikari")
  public HikariConfig hikariConfig(){
    return new HikariConfig();
  }

  @Bean
  public DataSource dataSource() throws Exception{
    DataSource dataSource = new HikariDataSource(hikariConfig());
    System.out.println(dataSource.toString());
    return dataSource;
  }

  /*
  * Junit 단위 테스트가 끝날때마다 수행되는 메소드를 지정
  * 보통은 전체테스트를 수행할 때 테스트 간 데이터 침범을 막기 위해 사용.
  * */
  @After
  public void cleanUp() {
    postsRepository.deleteAll();
  }

  @Test
  public void getPosts(){
    String title = "SpringBootApplication 추가";
    String content = "autowired 에러가 드디어 안 나옴 만세";

    /*
    * save()
    * 테이블 posts 에  insert/update 쿼리를 실행
    * id 값이 있다면 insert 없다면 update
    * */
    postsRepository.save(Posts.builder().title(title).content(content).author("the king").build());

    /* findAll : 모든 데이터 조회 */
    List<Posts> postsList = postsRepository.findAll();

    Posts posts = postsList.get(0);
    assertThat(posts.getTitle()).isEqualTo(title);
    assertThat(posts.getContent()).isEqualTo(content);
  }

}
