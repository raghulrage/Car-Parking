package com.remotehiring.Slots;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

public interface SlotsRepository extends JpaRepository<Slots, String>{
	
	@Query("Select s from Slots s where s.locationid = ?1")
	List<Slots> slotById(Integer locationid);
	
	@Modifying
	@Transactional
	@Query("Update Slots s set s.status = ?1, s.time = ?2, s.duration = ?3 where s.slotid = ?4")
	int updateSlot(Integer status, String time, Integer duration, String slotid);
	
	@Modifying
	@Transactional
	@Query("Update Slots s set s.status = 0, s.time = '0', s.duration = 0 where s.slotid = ?1")
	int rollbackSlot(String slotid);
}
