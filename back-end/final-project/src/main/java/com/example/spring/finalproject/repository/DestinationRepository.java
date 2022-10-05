package com.example.spring.finalproject.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.spring.finalproject.models.Destination;

public interface DestinationRepository extends JpaRepository<Destination, Long> {

}
