package com.remotehiring.Admin;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class AdminController {
	@Autowired
	private AdminService service;
	
	@PostMapping("/admin")
	public ResponseEntity<Boolean> checkadmin(@RequestBody Admin admin){
		return new ResponseEntity<Boolean> (service.checkadmin(admin),HttpStatus.OK);
	}
}
