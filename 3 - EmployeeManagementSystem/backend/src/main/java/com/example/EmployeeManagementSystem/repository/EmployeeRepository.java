package com.example.EmployeeManagementSystem.repository;

import com.example.EmployeeManagementSystem.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {

    // Search by employee name
    List<Employee> findByNameContainingIgnoreCase(String name);

    // Search by department
    List<Employee> findByDepartmentContainingIgnoreCase(String department);

    // Search by email
    List<Employee> findByEmailContainingIgnoreCase(String email);

    // Search by name OR department OR email
    List<Employee> findByNameContainingIgnoreCaseOrDepartmentContainingIgnoreCaseOrEmailContainingIgnoreCase(
            String name,
            String department,
            String email
    );
}