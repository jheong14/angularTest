package com.domain.posts;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;

@Component
/* JpaRepository<Entity 클래스, PK 타입> 을 상속하면 기본적인 CRUD 메소드가 자동으로 생성됩니다. */
public interface PostsRepository extends JpaRepository<Posts, Long> {
}
