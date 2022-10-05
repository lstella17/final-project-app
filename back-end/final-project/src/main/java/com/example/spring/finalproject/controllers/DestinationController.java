package com.example.spring.finalproject.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.spring.finalproject.models.Destination;
import com.example.spring.finalproject.models.Images;
import com.example.spring.finalproject.repository.DestinationRepository;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/destination")
public class DestinationController {
	
	@Autowired
	static DestinationRepository destinationRepo;
	
	@PostMapping("/create")
	public static String createDestination(@RequestBody Destination destination) {
		
		destinationRepo.save(destination);
		
		return "Destination with id: " + destination.getId() + " is created";
		
	}

}
