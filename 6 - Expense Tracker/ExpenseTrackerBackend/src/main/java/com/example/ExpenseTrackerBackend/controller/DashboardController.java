package com.example.ExpenseTrackerBackend.controller;

import com.example.ExpenseTrackerBackend.dto.CategoryExpenseDTO;
import com.example.ExpenseTrackerBackend.dto.DashboardSummary;
import com.example.ExpenseTrackerBackend.dto.MonthlyExpenseDTO;
import com.example.ExpenseTrackerBackend.service.ExpenseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/dashboard")
@CrossOrigin(origins = "http://localhost:5173")
public class DashboardController {

    @Autowired
    private ExpenseService expenseService;

    // Dashboard Summary
    @GetMapping("/summary")
    public DashboardSummary getDashboardSummary() {
        return expenseService.getDashboardSummary();
    }

    // Category Wise Expense (Pie Chart)
    @GetMapping("/category")
    public List<CategoryExpenseDTO> getCategoryWiseExpense() {
        return expenseService.getCategoryWiseExpense();
    }

    // Monthly Expense (Bar Chart)
    @GetMapping("/monthly")
    public List<MonthlyExpenseDTO> getMonthlyExpense() {
        return expenseService.getMonthlyExpense();
    }

}