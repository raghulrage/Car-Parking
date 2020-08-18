package com.remotehiring.Locations;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

public interface LocationsRepository extends JpaRepository<Locations, Integer>{
	
	@Query("Select count(*) from Locations where location_name = ?1")
	Integer findCountOfLocation(String name);
	
	@Query("Select locationid from Locations where location_name = ?1")
	Integer getLocationId(String name);
	
	@Modifying
	@Transactional
	@Query("Update Locations loc set loc.slots = loc.slots+1 where loc.locationid = ?1")
	int updateSlot( Integer locationid);

}
