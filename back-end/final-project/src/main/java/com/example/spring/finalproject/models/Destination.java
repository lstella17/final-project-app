package com.example.spring.finalproject.models;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;

@Entity
@Table(	name = "destination")
public class Destination {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column
	private Integer price;
	
	@Column
	private String title;
	
	@Column
	private String place;
	
	@Column
	private String description;

	@OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name = "destinationNum")
	private List<Images> images;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Integer getPrice() {
		return price;
	}

	public void setPrice(Integer price) {
		this.price = price;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getPlace() {
		return place;
	}

	public void setPlace(String place) {
		this.place = place;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public List<Images> getImages() {
		return images;
	}

	public void setImages(List<Images> images) {
		this.images = images;
	}

	public Destination(@NotBlank Integer price, @NotBlank String title, @NotBlank String place,
			@NotBlank String description) {
		super();
		this.price = price;
		this.title = title;
		this.place = place;
		this.description = description;
	}

	public Destination() {
		super();
	}
	
}
