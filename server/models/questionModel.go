package models

import "gorm.io/gorm"

type Question struct {
	gorm.Model
	Gender      string   
    Age         bool      
    Allergies   string   
    Description string   
    UserID      string   
    RecList     []string `gorm:"type:json"` 
}