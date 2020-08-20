package com.remotehiring.Users;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Users {
	@Id private String email;
	private String fullname;
	private String mobno;
	private String password;

	public Users() {
	}

	public Users(String email, String fullname, String mobno, String password) {
		super();
		this.email = email;
		this.fullname = fullname;
		this.mobno = mobno;
		this.password = password;
	}
	

	@Id
	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getFullname() {
		return fullname;
	}

	public void setFullname(String fullname) {
		this.fullname = fullname;
	}

	public String getMobno() {
		return mobno;
	}

	public void setMobno(String mobno) {
		this.mobno = mobno;
	}
	
	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
}
