package com.example.cassandra.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.cassandra.repository.support.BasicMapId;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.datastax.driver.core.utils.UUIDs;
import com.example.cassandra.model.Persona;
import com.example.cassandra.repo.PersonaRepository;

//@CrossOrigin(origins = "http://localhost:4200")
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api")
public class PersonaController {

	@Autowired
	PersonaRepository personaRepository;
        
        //recupera toda las lista de las personas
	@GetMapping("/personas")
	public List<Persona> getAllPersonas() {
		System.out.println("Recuperando todos las personas...");

		List<Persona> personas = new ArrayList<>();
		personaRepository.findAll().forEach(personas::add);
		return personas;
	}
        
        //inserta la persona
	@PostMapping("/personas/create")
        public ResponseEntity<Persona> obtenerPersona(@RequestBody Persona datos){
        try{
            Persona dat = personaRepository.save(new Persona(datos.getId(), datos.getCedula(), datos.getNombre(), datos.getApellido(), datos.getEdad(), datos.isEstado()));
            return new ResponseEntity<>(dat , HttpStatus.CREATED);
        }catch(Exception e){
            return new ResponseEntity<>(null , HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
//	public ResponseEntity<Persona> createPersona(@Valid @RequestBody Persona persona) {
//		System.out.println("Crear Persona: " + persona.getNombre()+ "...");
//
//		persona.setId(UUIDs.timeBased());
//                persona.getCedula();
//                persona.getApellido();
//                persona.getEdad();
//		persona.setEstado(true);
//		Persona _persona = personaRepository.save(persona);
//		return new ResponseEntity<>(_persona, HttpStatus.OK);
//	}
        
        //actualizacion de la persona por el ID
	@PutMapping("/personas/{id}")
	public ResponseEntity<Persona> updatePersona(@PathVariable("id") UUID id, @RequestBody Persona persona) {
		System.out.println("Actualizar persona por ID = " + id + "...");

		Persona infpersona = personaRepository.findOne(BasicMapId.id("id", id));
		if (infpersona == null) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
                infpersona.setCedula(persona.getCedula());
		infpersona.setNombre(persona.getNombre());
                infpersona.setApellido(persona.getApellido());
		infpersona.setEdad(persona.getEdad());
		infpersona.setEstado(persona.isEstado());
		Persona updatepersona = personaRepository.save(infpersona);
		return new ResponseEntity<>(updatepersona, HttpStatus.OK);
	}
        
        //elimina a la persona por ID
	@DeleteMapping("/personas/{id}")
	public ResponseEntity<String> deletePersona(@PathVariable("id") UUID id) {
		System.out.println("Eliminar persona por ID = " + id + "...");

		personaRepository.delete(BasicMapId.id("id", id));

		return new ResponseEntity<>("La Persona ha sido eliminada!", HttpStatus.OK);
	}
        
        //Elimina a todas las personas.
	@DeleteMapping("/personas/delete")
	public ResponseEntity<String> deleteAllPersonas() {
		System.out.println("Eliminar todos las Personas...");

		personaRepository.deleteAll();

		return new ResponseEntity<>("Todos las personas han sido eliminadas.!", HttpStatus.OK);
	}
}