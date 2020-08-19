package com.cassandra.repository;

import com.cassandra.model.persona;
import java.util.List;
import org.springframework.data.cassandra.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface personaRepository extends CrudRepository<persona, String> {

    @Query(value = "SELECT * FROM persona WHERE cedula=?0")
    public List<persona> findByCedula(String cedula);

}
