package com.example.ExpenseTrackerBackend.service;

import com.example.ExpenseTrackerBackend.entity.Expense;
import com.example.ExpenseTrackerBackend.dto.CategoryExpenseDTO;
import com.example.ExpenseTrackerBackend.dto.DashboardSummary;
import com.example.ExpenseTrackerBackend.dto.MonthlyExpenseDTO;

import java.time.LocalDate;
import java.util.List;

public interface ExpenseService {

    // Add Expense
    Expense addExpense(Expense expense);

    // Get All Expenses
    List<Expense> getAllExpenses();

    // Get Expense By ID
    Expense getExpenseById(Long id);

    // Update Expense
    Expense updateExpense(Long id, Expense expense);

    // Delete Expense
    void deleteExpense(Long id);

    // Search by Title
    List<Expense> searchByTitle(String title);

    // Filter by Category
    List<Expense> getExpensesByCategory(String category);

    // Filter by Date
    List<Expense> getExpensesByDate(LocalDate date);

    // Filter by Date Range
    List<Expense> getExpensesByDateRange(LocalDate startDate, LocalDate endDate);

    // Dashboard Summary
    DashboardSummary getDashboardSummary();

    // Category Wise Expense
    List<CategoryExpenseDTO> getCategoryWiseExpense();

    // Monthly Expense
    List<MonthlyExpenseDTO> getMonthlyExpense();
}