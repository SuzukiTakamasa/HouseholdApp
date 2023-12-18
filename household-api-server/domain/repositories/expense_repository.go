package repositories

import "github.com/SuzukiTakamasa/HouseholdApp/domain/entities"

type ExpenseRepository interface {
	GetExpense() ([]entities.Expense, error)
	CreateExpense() (entities.Expense, error)
	UpdateHousehold(id int) (entities.Expense, error)
	DeleteHousehold(id int) (entities.Expense, error)
}
