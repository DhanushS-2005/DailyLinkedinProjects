package com.example.studentManagementSystem.service;

import com.example.studentManagementSystem.model.Student;
import com.example.studentManagementSystem.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StudentService {

    @Autowired
    private StudentRepository studentRepository;

    public List<Student> getAllStudents(){
        return studentRepository.findAll();
    }

    public Student getStudentById(Long id) {
        return studentRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Student Not Found"));
    }
    public Student addStudent(Student student) {
        return studentRepository.save(student);
    }

    public Student updateStudent(Student student, Long id){
        Student old = getStudentById(id);

        old.setFirstName(student.getFirstName());
        old.setLastName(student.getLastName());
        old.setEmail(student.getEmail());
        old.setCourse(student.getCourse());
        old.setPhone(student.getPhone());
        old.setDepartment(student.getDepartment());
        old.setYear(student.getYear());

        return studentRepository.save(old);
    }

    public void deleteStudent(Long id) {
        studentRepository.delete(getStudentById(id));
    }

    public List<Student> searchStudents(String firstName) {
        return studentRepository.findByFirstNameContainingIgnoreCase(firstName);
    }

}
