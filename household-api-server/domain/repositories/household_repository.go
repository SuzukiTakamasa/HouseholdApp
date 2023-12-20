package repositories

import "github.com/SuzukiTakamasa/HouseholdApp/domain/entities"

type HouseholdRepository interface {
	GetHousehold() ([]entities.Household, error)
	CreateHousehold() error
	UpdateHoushold() error
	DeleteHousehold(id int) (entities.Household, error)
}
