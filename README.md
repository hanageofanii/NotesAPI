# Notes Backend

## A simple backend service for managing notes. This service provides APIs to:
1. **Create** a new note
2. **View** all notes
3. **View** a specific note by ID
4. **Update** an existing note
5. **Delete** a note


## Requirements
1. **Node.js** - JavaScript runtime environment
2. **MySQL** - Database server
3. **Express.js** - Web framework for Node.js
4. **mysql2** - MySQL client for Node.js
5. **dotenv** - Load environment variables from a .env file

## Installation and Setup

### 1. Clone the Repository
git clone https://github.com/hanageofanii/NotesAPI.git
cd notes-backend

### 2. Install Dependencies
npm install

### Configure Environment Variables
APP_PORT=5000
HOST=localhost
USER=root
PASSWORD=
DATABASE=notes_db

### Set Up the Database
**1. Start your MySQL server.**
**2. Open your MySQL client or terminal and run the following SQL commands:**
CREATE DATABASE notes_db;
USE notes_db;
CREATE TABLE notes (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    title TEXT NOT NULL,
    datetime DATETIME NOT NULL,
    note LONGTEXT NOT NULL
);

**3. Start the Server**
npm start
***http://localhost:5000.***

# API Endpoints

**1. GET /notes**
[
  {
    "id": 1,
    "title": "Sample Note",
    "datetime": "2024-12-03T10:30:00",
    "note": "This is a sample note."
  }
]

**2. GET /notes/:id**
*id (number): The unique ID of the note.*
{
  "id": 1,
  "title": "Sample Note",
  "datetime": "2024-12-03T10:30:00",
  "note": "This is a sample note."
}

**3. POST /notes**
*Create a new note.*
{
  "title": "New Note",
  "datetime": "2024-12-03T10:30:00",
  "note": "This is a new note created via API."
}
*Response :*
{
  "message": "Note created successfully"
}

**4. PUT /notes/:id**
*Update an existing note.*
id (number): The unique ID of the note.
{
  "title": "Updated Note Title",
  "datetime": "2024-12-04T12:00:00",
  "note": "Updated content of the note."
}
*Response:*
{
  "message": "Note updated successfully"
}

**5. DELETE /notes/:id**
*Delete a note by ID.*
id (number): The unique ID of the note.
*Response:*
{
  "message": "Note deleted successfully"
}

# FILE STRUCTURE
notes-backend/
│
├── controllers/          
│   └── notesController.js
├── db/          
│   └── connection.js
├── routes/              
│   └── notes.js
│
├── .env                 
├── .gitignore            
├── server.js            
├── package.json          
└── README.md    

## Troubleshooting
1. Ensure the MySQL database is running and accessible.
2. Verify the .env file is correctly configured.
3. Check error messages in the console and adjust the configuration as needed.

## License
This project is licensed under the MIT License. See the LICENSE file for details.



