package com.example.spring.finalproject.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.spring.finalproject.models.Images;
import com.example.spring.finalproject.repository.ImagesRepository;


@RestController
@RequestMapping("/file")
public class ImagesController {
	
	@Autowired
	static ImagesRepository imgRepo;
	
	@PostMapping("/upload")
	public ResponseEntity uploadToDb(@RequestParam("file") MultipartFile file, @RequestParam("fileName")String fileName) {
		
		Images img = new Images();
		img.setFileName(fileName);
		try {
			img.setFile(file.getBytes());
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.badRequest().body("Invalid file");
		}
		
		imgRepo.save(img);
		
		return ResponseEntity.ok(img);
		
	}

}
