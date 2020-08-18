package com.remotehiring.Mail;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.remotehiring.Bookings.Bookings;
import com.remotehiring.Locations.LocationsRepository;
import com.remotehiring.Users.UsersService;

@Service
public class MailService {
		@Autowired
		private JavaMailSender javamailsender;
		
		@Autowired
		private UsersService userservice;
		@Autowired
		private LocationsRepository locationrepo;
		
		public void sendEmail(Bookings booking) {
			SimpleMailMessage mail = new SimpleMailMessage(); 
			String name = userservice.get(booking.getEmail()).getFullname();
			mail.setTo(booking.getEmail());
			mail.setFrom("virtusadummymail@gmail.com");
			mail.setSubject("Booking Successful");
			String location_name = locationrepo.findById(booking.getLocationid()).get().getLocation_name();
			String slotno = booking.getSlotid();
			String time = booking.getTime();
			String content = "Hi Mr/Mrs."+name.toUpperCase()+", Your Booking has been confirmed. \nThank You for booking...\n\n"+ "Location: "+ location_name + "\nSlot No: "+ slotno + "\nTime: "+ time;
			mail.setText(content);
			System.out.println("Mail has sended");
			javamailsender.send(mail);
		}
}