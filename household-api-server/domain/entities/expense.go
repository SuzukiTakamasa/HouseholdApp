package entities

type Expense struct {
	Item      string `json:"item"`
	Amount    int    `json:"amount"`
	IsDefault int    `json:"is_default"`
}
