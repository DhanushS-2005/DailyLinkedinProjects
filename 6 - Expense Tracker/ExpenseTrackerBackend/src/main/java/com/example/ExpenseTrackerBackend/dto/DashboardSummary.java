package com.example.ExpenseTrackerBackend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class DashboardSummary {

    private Double totalExpense;
    private Long totalTransactions;
}