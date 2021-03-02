/*
package com.example.test;

import com.entities.TeamEntity;
import com.repositories.TeamRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;

import static org.junit.Assert.assertEquals;

class TeamRepositoryTest extends Exception{
  @Autowired
  private TeamRepository teRepo;

  @Test
  public void save() throws Exception{
    TeamEntity te = new TeamEntity();
    te.setId(1);
    te.setName("ㅖㅖㅖㅖㅖㅖㅖㅖㅖㅖㅖㅖㅖㅖㅖㅖ");
    teRepo.save(te);

    TeamEntity selectedTeam = teRepo.findOne(1l);
    assertEquals(1l, selectedTeam.getId());
    assertEquals("한화", selectedTeam.getName());

  }

}
*/
