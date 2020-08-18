package com.remotehiring.Admin;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AdminService {

	@Autowired
	private AdminRepository repo;
	
	public boolean checkadmin(Admin admin) {
		if (repo.existsById(admin.getAdminid())) {
			Admin currentadmin = repo.findById(admin.getAdminid()).get();
			if (currentadmin.getPassword().equals(admin.getPassword())) {
				return true;
			}
			else {
				return false;
			}
		}
		else {
			return false;
		}
		
	}
}
