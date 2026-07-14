package com.example.ExpenseTrackerBackend.serviceImpl;

import com.example.ExpenseTrackerBackend.entity.Expense;
import com.example.ExpenseTrackerBackend.repository.ExpenseRepository;
import com.example.ExpenseTrackerBackend.service.ExpenseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.ExpenseTrackerBackend.dto.CategoryExpenseDTO;
import com.example.ExpenseTrackerBackend.dto.DashboardSummary;
import com.example.ExpenseTrackerBackend.dto.MonthlyExpenseDTO;

import java.time.LocalDate;
import java.util.List;

@Service
public class ExpenseServiceImpl implements ExpenseService {

    @Autowired
    private ExpenseRepository expenseRepository;

    @Override
    public Expense addExpense(Expense expense) {
        return expenseRepository.save(expense);
    }

    @Override
    public List<Expense> getAllExpenses() {
        return expenseRepository.findAll();
    }

    @Override
    public Expense getExpenseById(Long id) {
        return expenseRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Expense not found with ID: " + id));
    }

    @Override
    public Expense updateExpense(Long id, Expense expense) {

        Expense existingExpense = getExpenseById(id);

        existingExpense.setTitle(expense.getTitle());
        existingExpense.setCategory(expense.getCategory());
        existingExpense.setAmount(expense.getAmount());
        existingExpense.setDate(expense.getDate());
        existingExpense.setDescription(expense.getDescription());

        return expenseRepository.save(existingExpense);
    }

    @Override
    public void deleteExpense(Long id) {

        Expense expense = getExpenseById(id);
        expenseRepository.delete(expense);
    }

    @Override
    public List<Expense> searchByTitle(String title) {
        return expenseRepository.findByTitleContainingIgnoreCase(title);
    }

    @Override
    public List<Expense> getExpensesByCategory(String category) {
        return expenseRepository.findByCategory(category);
    }

    @Override
    public List<Expense> getExpensesByDate(LocalDate date) {
        return expenseRepository.findByDate(date);
    }

    @Override
    public List<Expense> getExpensesByDateRange(LocalDate startDate, LocalDate endDate) {
        return expenseRepository.findByDateBetween(startDate, endDate);
    }

    @Override
    public DashboardSummary getDashboardSummary() {

        Double totalExpense = expenseRepository.getTotalExpense();
        Long totalTransactions = expenseRepository.getTotalTransactions();

        return new DashboardSummary(totalExpense, totalTransactions);
    }

    @Override
    public List<CategoryExpenseDTO> getCategoryWiseExpense() {
        return expenseRepository.getCategoryWiseExpense();
    }

    @Override
    public List<MonthlyExpenseDTO> getMonthlyExpense() {

        List<Object[]> result = expenseRepository.getMonthlyExpense();

        return result.stream()
                .map(row -> new MonthlyExpenseDTO(
                        row[0].toString(),
                        ((Number) row[1]).doubleValue()
                ))
                .toList();
    }
}