
package com.cassandra.controller;

import com.cassandra.model.persona;
import com.cassandra.repository.personaRepository;

public class personaController {
    
    personaRepository server;
    
    public void crearDatos(persona perdat){
        server.save(perdat);
    }
}
