package com.remotehiring.Slots;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.remotehiring.Bookings.Bookings;
import com.remotehiring.Locations.LocationsRepository;
import com.remotehiring.Locations.LocationsService;


@Service
public class SlotsService {
	
	@Autowired
	private SlotsRepository repo;
	
	@Autowired
	private LocationsService locationservice;
	
	@Autowired
	private LocationsRepository locationrepo;
	
	public List<Slots> listAll(){
		return repo.findAll();
	}
	
	public boolean add(Slots slot) {
		if (locationrepo.existsById(slot.getLocationid())) {
			if (repo.existsById(slot.getSlotid())) {
				return false;
			}
			else {
				
				repo.save(slot);
				locationservice.addSlot(slot.getLocationid());
				return true;
			}
		}
		else {
			return false;
		}
		
	}
	
	public List<Slots> slotById(Integer locationid){
		return repo.slotById(locationid);
	}
	
	public void updateSlot(Bookings booking) {
		repo.updateSlot(1, booking.getTime(), booking.getDuration(),booking.getSlotid());
	}
	
	public void rollbackSlot(String slotid) {
		repo.rollbackSlot(slotid);
	}
}
