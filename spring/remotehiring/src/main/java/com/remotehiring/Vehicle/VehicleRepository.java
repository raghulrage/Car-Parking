package com.remotehiring.Vehicle;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface VehicleRepository extends JpaRepository<Vehicle, Integer>{

	@Query("Select cost from Vehicle where vehicle_type = ?1")
	String getVechileCost(String vehicle_type);
	
}
