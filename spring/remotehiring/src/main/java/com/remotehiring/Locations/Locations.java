package com.remotehiring.Locations;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Entity;

@Entity
public class Locations {
	private Integer locationid;
	private String location_name;
	private Integer slots = 0;
	private String area;
	
	public Locations() {
	}
	
	public Locations(Integer locationid, String location_name, Integer slots, String area) {
		super();
		this.locationid = locationid;
		this.location_name = location_name;
		this.slots = slots;
		this.area = area;
	}
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public Integer getLocationid() {
		return locationid;
	}
	public void setLocationid(Integer locationid) {
		this.locationid = locationid;
	}
	public String getLocation_name() {
		return location_name;
	}
	public void setLocation_name(String location_name) {
		this.location_name = location_name;
	}
	public Integer getSlots() {
		return slots;
	}
	public void setSlots(Integer slots) {
		this.slots = slots;
	}
	public String getArea() {
		return area;
	}
	public void setArea(String area) {
		this.area = area;
	}
	
}
