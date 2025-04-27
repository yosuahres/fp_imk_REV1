package initializers

import (
	"github.com/hares/fp_imk/server/models"
)

func SyncDatabase() {
	DB.AutoMigrate(&models.User{}, &models.Question{})
}