package com.remotehiring.Locations;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class LocationsService {
	
	@Autowired
	private LocationsRepository repo;
	
	public List<Locations> listAll(){
		return repo.findAll();
	}

	public boolean addLocation(Locations location) {	
		Integer count = repo.findCountOfLocation(location.getLocation_name());
		if (count>0) {
			return false;
		}
		else {
			repo.save(location);
			return true;			
		}	
	}
	
	public void addSlot(Integer locid) {
		repo.updateSlot(locid);
	}
	
}
