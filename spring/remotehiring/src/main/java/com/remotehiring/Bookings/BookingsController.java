package com.remotehiring.Bookings;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BookingsController {

	@Autowired
	private BookingsService service;
	
	@PostMapping("/bookings/add")
	@CrossOrigin(origins = "http://localhost:4200")
	public Bookings add(@RequestBody Bookings booking) {
		 return service.add(booking);
	}
	
	@GetMapping("/bookings")
//	@CrossOrigin(origins = "http://localhost:4200")
	public List<Bookings> listAll(){
		return service.listAll();
	}
	
	@GetMapping("bookings/getByUser/{email}")
	@CrossOrigin(origins = "http://localhost:4200")
	public List<Bookings> listByUsers(@PathVariable String email){
		return service.listByUsers(email);
	}
	
	@GetMapping("/bookings/endBooking/{bookingid}")
	@CrossOrigin(origins = "http://localhost:4200")
	public boolean endBooking(@PathVariable Integer bookingid) {
		return service.endBooking(bookingid);
	}
	
	@GetMapping("/bookings/allBookings")
	@CrossOrigin(origins = "http://localhost:4200")
	public List<Bookings> allBookings(){
		return service.listAll();
	}
	
}
