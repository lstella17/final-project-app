package com.example.spring.finalproject.repository;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.spring.finalproject.models.Images;

@Repository
public interface ImagesRepository extends JpaRepository<Images, Long>{
	
	@Transactional
	Images findByFileName(String fileName);

}
