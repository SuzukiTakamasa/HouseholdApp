package repositories

import "github.com/SuzukiTakamasa/HouseholdApp/domain/entities"

type HouseholdRepository interface {
	GetHousehold() ([]entities.Household, error)
	CreateHousehold() (entities.Household, error)
	DeleteHousehold(id int) (entities.Household, error)
}
