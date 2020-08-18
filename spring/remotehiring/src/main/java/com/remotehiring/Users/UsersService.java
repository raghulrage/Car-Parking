package com.remotehiring.Users;

//import java.security.SecureRandom;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UsersService {
	
	@Autowired
	private UsersRepository repo;

	public List<Users> listAll(){
		return repo.findAll();
	}
	
	public void save(Users users) {
//	BCryptPasswordEncoder passEncrypt = new BCryptPasswordEncoder(10,new SecureRandom());
//	users.setPassword(passEncrypt.encode(users.getPassword()));
		repo.save(users);
	}
	
	public Users get(String email) {
		return repo.findById(email).get();
	}
	
	public void delete(String email) {
		repo.deleteById(email);
	}
	
	public boolean checkuser(String email) {
		return repo.existsById(email);
		
	}
	
	public boolean checklogin(String emailid, String pass) {
		if (checkuser(emailid)) {
			Users users = get(emailid);
			if(users.getPassword().equals(pass)) {
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
