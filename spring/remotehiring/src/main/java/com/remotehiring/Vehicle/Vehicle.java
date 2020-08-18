package com.remotehiring.Vehicle;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


@Entity
public class Vehicle {
	private Integer vehicleid;
	private String vehicle_type;
	private String cost;
		
	public Vehicle() {
	}
	
	public Vehicle(Integer vehicleid, String vehicle_type, String cost) {
		super();
		this.vehicleid = vehicleid;
		this.vehicle_type = vehicle_type;
		this.cost = cost;
	}
	@Id 
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public Integer getVehicleid() {
		return vehicleid;
	}
	public void setVehicleid(Integer vehicleid) {
		this.vehicleid = vehicleid;
	}
	public String getVehicle_type() {
		return vehicle_type;
	}
	public void setVehicle_type(String vehicle_type) {
		this.vehicle_type = vehicle_type;
	}
	public String getCost() {
		return cost;
	}
	public void setCost(String cost) {
		this.cost = cost;
	}	
	
	
	
}
