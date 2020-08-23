
package com.cassandra.controller;

import com.cassandra.model.persona;
import com.cassandra.repository.personaRepository;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api")
public class personaController {
    
    @Autowired
    personaRepository server;
    
    
    @GetMapping(path = "/personas")
    public ResponseEntity<List<persona>> obtenerPersona(){
        try{
            List<persona> listP = new ArrayList();
            server.findAll().forEach(listP::add);
            if (listP.isEmpty()) {
                return new ResponseEntity<>(null , HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(listP , HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<>(null , HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    @PostMapping(path = "/persona")
    @CrossOrigin
    public ResponseEntity<persona> guardarPersona(@RequestBody persona datos){
        try{
            persona dato = server.save(new persona(UUID.randomUUID(), datos.getCedula(),datos.getNombre(), datos.getApellido(), datos.getEdad()));
            return new ResponseEntity<>(dato , HttpStatus.CREATED);
        }catch(Exception e){
            return new ResponseEntity<>(null , HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
