package com.example.contactmanager.service;

import com.example.contactmanager.entity.Contact;
import com.example.contactmanager.repository.ContactRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.*;
import java.util.List;
import java.util.UUID;

@Service
public class ContactService {

    @Autowired
    private ContactRepository repository;

    private final String uploadDir = "uploads";

    public Contact saveContact(Contact contact, MultipartFile file) throws IOException {

        Path uploadPath = Paths.get(uploadDir);

        if (!Files.exists(uploadPath)) {
            Files.createDirectories(uploadPath);
        }

        String fileName = UUID.randomUUID() + "_" + file.getOriginalFilename();

        Path filePath = uploadPath.resolve(fileName);

        Files.copy(file.getInputStream(), filePath, StandardCopyOption.REPLACE_EXISTING);

        contact.setImage(fileName);

        return repository.save(contact);
    }

    public List<Contact> getAllContacts() {
        return repository.findAll();
    }

    public Contact getContact(Long id) {
        return repository.findById(id).orElseThrow();
    }

    public Contact updateContact(Long id, Contact updatedContact, MultipartFile file) throws IOException {

        Contact contact = repository.findById(id).orElseThrow();

        contact.setName(updatedContact.getName());
        contact.setEmail(updatedContact.getEmail());
        contact.setPhone(updatedContact.getPhone());
        contact.setAddress(updatedContact.getAddress());

        if (file != null && !file.isEmpty()) {

            Path uploadPath = Paths.get(uploadDir);

            if (!Files.exists(uploadPath)) {
                Files.createDirectories(uploadPath);
            }

            if (contact.getImage() != null) {
                Files.deleteIfExists(uploadPath.resolve(contact.getImage()));
            }

            String fileName = UUID.randomUUID() + "_" + file.getOriginalFilename();

            Files.copy(file.getInputStream(),
                    uploadPath.resolve(fileName),
                    StandardCopyOption.REPLACE_EXISTING);

            contact.setImage(fileName);
        }

        return repository.save(contact);
    }

    public void deleteContact(Long id) {

        Contact contact = repository.findById(id).orElseThrow();

        try {

            if (contact.getImage() != null) {

                Path imagePath = Paths.get(uploadDir, contact.getImage());

                Files.deleteIfExists(imagePath);
            }

        } catch (Exception e) {
            e.printStackTrace();
        }

        repository.delete(contact);
    }

}