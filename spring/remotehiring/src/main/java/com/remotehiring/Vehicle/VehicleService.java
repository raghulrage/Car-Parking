package com.remotehiring.Vehicle;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class VehicleService {

	@Autowired
	private VehicleRepository repo;

	public List<Vehicle> listAll(){
		return repo.findAll();
	}
	
	public Vehicle add(Vehicle vehicle){
		Vehicle vec =  repo.save(vehicle);
		return vec;
	}
	
	public int getVehicleCost(String vehicle_type) {
		String cost = repo.getVechileCost(vehicle_type);
		
		return Integer.parseInt(cost);
	}
}
