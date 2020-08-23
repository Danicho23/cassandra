package com.example.cassandra.repo;

import org.springframework.data.cassandra.repository.CassandraRepository;

import com.example.cassandra.model.Persona;

public interface PersonaRepository extends CassandraRepository<Persona> {

}
