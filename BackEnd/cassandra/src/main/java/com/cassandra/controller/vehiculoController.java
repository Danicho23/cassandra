
package com.cassandra.controller;

import com.cassandra.model.vehiculo;
import com.cassandra.repository.vehiculoRepository;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api")
public class vehiculoController {
    @Autowired
    vehiculoRepository server;
    
    @GetMapping(path = "/vehiculos")
    public ResponseEntity<List<vehiculo>> obtenerPersona(){
        try{
            List<vehiculo> listV = new ArrayList();
            server.findAll().forEach(listV::add);
            if (listV.isEmpty()) {
                return new ResponseEntity<>(null , HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(listV , HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<>(null , HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    @PostMapping(path = "/vehiculo")
    @CrossOrigin
    public ResponseEntity<vehiculo> obtenerPersona(@RequestBody vehiculo datos){
        try{
            vehiculo dat = server.save(new vehiculo(UUID.randomUUID(), datos.getMarca(), datos.getModelo(), datos.getColorP(), datos.getColorS(), datos.getAnioFabri()));
            return new ResponseEntity<>(dat , HttpStatus.CREATED);
        }catch(Exception e){
            return new ResponseEntity<>(null , HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
