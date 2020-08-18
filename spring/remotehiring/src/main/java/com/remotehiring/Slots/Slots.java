package com.remotehiring.Slots;

import javax.persistence.Entity;
import javax.persistence.Id;


@Entity
public class Slots {
	@Id private String slotid;
	private Integer locationid;
	private String slotno;
	private Integer status = 0;
	private String time = "0";
	private Integer duration = 0;
	
	public Slots() {
	}
	
	public Slots(String slotid, Integer locationid, String slotno, Integer status, String time, Integer duration) {
		super();
		this.slotid = slotid;
		this.locationid = locationid;
		this.slotno = slotno;
		this.status = status;
		this.time = time;
		this.duration = duration;
	}
	
	public String getSlotid() {
		return slotid;
	}
	
	public void setSlotid(String slotid) {
		this.slotid = slotid;
	}
	public Integer getLocationid() {
		return locationid;
	}
	public void setLocationid(Integer locationid) {
		this.locationid = locationid;
	}
	public String getSlotno() {
		return slotno;
	}
	public void setSlotno(String slotno) {
		this.slotno = slotno;
	}
	public Integer getStatus() {
		return status;
	}
	public void setStatus(Integer status) {
		this.status = status;
	}
	public String getTime() {
		return time;
	}
	public void setTime(String time) {
		this.time = time;
	}
	public Integer getDuration() {
		return duration;
	}
	public void setDuration(Integer duration) {
		this.duration = duration;
	}
	
	
}
