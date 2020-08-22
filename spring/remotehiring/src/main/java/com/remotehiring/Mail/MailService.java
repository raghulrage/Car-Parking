package com.remotehiring.Mail;

import java.io.IOException;
import java.nio.charset.StandardCharsets;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.springframework.ui.freemarker.FreeMarkerTemplateUtils;
import freemarker.template.Configuration;
import freemarker.template.Template;
import freemarker.template.TemplateException;
import com.remotehiring.Users.Users;

@Service
public class MailService {

    @Autowired
    private JavaMailSender emailSender;

    @Autowired
    @Qualifier("emailConfigBean")
    private Configuration emailConfig;

    public void signupMail(Users user) throws MessagingException, IOException, TemplateException {


        MimeMessage message = emailSender.createMimeMessage();
        MimeMessageHelper mimeMessageHelper = new MimeMessageHelper(message, MimeMessageHelper.MULTIPART_MODE_MIXED_RELATED, StandardCharsets.UTF_8.name());
        Template template = emailConfig.getTemplate("email.ftl");
        String html = FreeMarkerTemplateUtils.processTemplateIntoString(template, user);

        mimeMessageHelper.setTo(user.getEmail());
        mimeMessageHelper.setText(html, true);
        mimeMessageHelper.setSubject("Welcome " + user.getFullname());
        mimeMessageHelper.setFrom("virtusadummymail@gmail.com");
        emailSender.send(message);

    }
}