package entities

type Household struct {
	Year      int    `json:"year"`
	Month     int    `json:"month"`
	Item      string `json:"item"`
	Amount    int    `json:"amount"`
	IsDefault int    `json:"is_default"`
	Version   int    `json:"version"`
}
