package com.remotehiring.Vehicle;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class VehicleController {
	@Autowired
	private VehicleService service;
	
	@GetMapping("/vehicle")
	public List<Vehicle> list(){
		return service.listAll();
	}
	
	@PostMapping("/vehicle/add")
	public ResponseEntity<Vehicle> add(@RequestBody Vehicle vehicle){
		return new ResponseEntity<Vehicle>(service.add(vehicle),HttpStatus.OK);
	}
}
