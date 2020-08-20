package com.remotehiring.Slots;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class SlotsController {
	
	@Autowired
	private SlotsService service;
	
	@GetMapping("/slots")
	public List<Slots> listAll(){
		return service.listAll();
	}
	
	@GetMapping("/slots/getbyid/{locationid}")
	public List<Slots> slotById(@PathVariable("locationid") Integer locationid){
		return service.slotById(locationid);
		
	}
	@PostMapping("/slots/add")
	public boolean add(@RequestBody Slots slot) {
		return service.add(slot);
	}
}
