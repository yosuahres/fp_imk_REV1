package initializers

import (
    "fmt"
    "os"
    "strings"

    "gorm.io/gorm"
    "gorm.io/driver/postgres"
)

var DB *gorm.DB

func ConnectToDB() {
    var err error
    dsn := os.Getenv("DATABASE_URL")

    // Ensure sslmode is included
    if !strings.Contains(dsn, "sslmode=") {
        dsn += "?sslmode=require"
    }

    DB, err = gorm.Open(postgres.Open(dsn), &gorm.Config{})
    if err != nil {
        fmt.Printf("Error connecting to database: %v\n", err)
        panic("failed to connect to database")
    }

    fmt.Println("Database connected successfully!")
}