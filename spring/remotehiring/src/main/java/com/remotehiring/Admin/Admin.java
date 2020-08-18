package com.remotehiring.Admin;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Admin {
	
	private Integer adminid;
	private String password;
	
	public Admin() {
	}
	
	@Id
	public Integer getAdminid() {
		return adminid;
	}
	public void setAdminid(Integer adminid) {
		this.adminid = adminid;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
	
	
}
