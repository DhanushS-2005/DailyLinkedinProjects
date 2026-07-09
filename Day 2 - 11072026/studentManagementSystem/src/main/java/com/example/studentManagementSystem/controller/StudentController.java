    package com.example.studentManagementSystem.controller;

    import com.example.studentManagementSystem.model.Student;
    import com.example.studentManagementSystem.service.StudentService;
    import jakarta.validation.Valid;
    import org.springframework.beans.factory.annotation.Autowired;
    import org.springframework.http.HttpStatus;
    import org.springframework.http.ResponseEntity;
    import org.springframework.web.bind.annotation.*;

    import java.util.List;

    @CrossOrigin(origins = "http://localhost:5173")
    @RestController
    @RequestMapping("/students")
    public class StudentController {

        @Autowired
        private StudentService studentService;

        @GetMapping
        public ResponseEntity<List<Student>> getAllStudents() {
            return ResponseEntity.ok(studentService.getAllStudents());
        }

        @GetMapping("/{id}")
        public ResponseEntity<Student> getById(@PathVariable Long id) {
            try {
                return ResponseEntity.ok(studentService.getStudentById(id));
            } catch (RuntimeException e) {
                return ResponseEntity.notFound().build();
            }
        }

        @PostMapping
        public ResponseEntity<Student> createStudent(@Valid @RequestBody Student student) {
            return new ResponseEntity<>(studentService.addStudent(student), HttpStatus.CREATED);
        }

        @PutMapping("/{id}")
        public ResponseEntity<Student> updateStudent(@Valid @RequestBody Student student, @PathVariable Long id) {
            return new ResponseEntity<>(studentService.updateStudent(student, id), HttpStatus.OK);
        }

        @DeleteMapping("/{id}")
        public void deleteStudent(@PathVariable Long id){
            studentService.deleteStudent(id);
        }

        @GetMapping("/search")
        public ResponseEntity<List<Student>> searchStudents(
                @RequestParam String firstName) {

            return ResponseEntity.ok(studentService.searchStudents(firstName));
        }
    }
