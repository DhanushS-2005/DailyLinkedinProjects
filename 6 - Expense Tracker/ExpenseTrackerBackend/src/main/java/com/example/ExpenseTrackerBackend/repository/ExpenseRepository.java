package com.example.ExpenseTrackerBackend.repository;

import com.example.ExpenseTrackerBackend.dto.CategoryExpenseDTO;
import com.example.ExpenseTrackerBackend.dto.MonthlyExpenseDTO;
import com.example.ExpenseTrackerBackend.entity.Expense;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface ExpenseRepository extends JpaRepository<Expense, Long> {

    // Search by title
    List<Expense> findByTitleContainingIgnoreCase(String title);

    // Filter by category
    List<Expense> findByCategory(String category);

    // Filter by date
    List<Expense> findByDate(LocalDate date);

    // Filter by date range
    List<Expense> findByDateBetween(LocalDate startDate, LocalDate endDate);

    // Total Expense
    @Query("SELECT COALESCE(SUM(e.amount),0) FROM Expense e")
    Double getTotalExpense();

    // Total Transactions
    @Query("SELECT COUNT(e) FROM Expense e")
    Long getTotalTransactions();

    // Category Wise Expense
    @Query("""
            SELECT new com.example.ExpenseTrackerBackend.dto.CategoryExpenseDTO(
                e.category,
                SUM(e.amount)
            )
            FROM Expense e
            GROUP BY e.category
            """)
    List<CategoryExpenseDTO> getCategoryWiseExpense();

    // Monthly Expense
    @Query(value = """
        SELECT
            DATE_FORMAT(date, '%Y-%m') AS month,
            SUM(amount) AS totalAmount
        FROM expenses
        GROUP BY DATE_FORMAT(date, '%Y-%m')
        ORDER BY DATE_FORMAT(date, '%Y-%m')
        """, nativeQuery = true)
    List<Object[]> getMonthlyExpense();
}