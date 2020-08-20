package com.remotehiring.Locations;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class LocationsController {
	
	@Autowired
	private LocationsService service;
	
	@GetMapping("/locations")
	public List<Locations> list(){
		return service.listAll();
	}

	@PostMapping("/locations/add")
	public boolean add(@RequestBody Locations location) {
		return service.addLocation(location);
	}
	
}
