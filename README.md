# Notes Backend

A simple backend service for managing notes. This service provides APIs to:
- **Create** a new note
- **View** all notes
- **View** a specific note by ID
- **Update** an existing note
- **Delete** a note

## Requirements
- **Node.js** - JavaScript runtime environment  
- **MySQL** - Database server  
- **Express.js** - Web framework for Node.js  
- **mysql2** - MySQL client for Node.js  
- **dotenv** - Load environment variables from a `.env` file  

## Installation and Setup
1. **Clone the Repository**  
   ```bash
   git clone https://github.com/hanageofanii/NotesAPI.git
   cd notes-backend
   ```

2. **Install Dependencies**  
   ```bash
    npm install
    npm install express mysql2 dotenv moment-timezone
   ```

3. **Configure Environment Variables**  
   Create a `.env` file in the root directory with the following content:  
   ```env
   APP_PORT=3000
   HOST=localhost
   USER=root
   PASSWORD=
   DATABASE=notes_db
   ```

4. **Set Up the Database**  
   Start your MySQL server, then open your MySQL client or terminal and run the following SQL commands:  
   ```sql
   CREATE DATABASE notes_db;
   USE notes_db;
   CREATE TABLE notes (
       id BIGINT AUTO_INCREMENT PRIMARY KEY,
       title TEXT NOT NULL,
       datetime DATETIME NOT NULL,
       note LONGTEXT NOT NULL
   );
   ```

5. **Start the Server**  
   ```bash
   npm start
   ```
   The server will be running at: [http://localhost:3000](http://localhost:3000).

## API Endpoints

### **GET /notes**  
Fetch all notes.  
**Sample Response:**
```json
[
  {
    "id": 1,
    "title": "Sample Note",
    "datetime": "2024-12-03T10:30:00",
    "note": "This is a sample note."
  }
]
```

### **GET /notes/:id**  
Fetch a note by ID.  
**Parameters:**  
- `id` (number): The unique ID of the note.  

**Sample Response:**
```json
{
  "id": 1,
  "title": "Sample Note",
  "datetime": "2024-12-03T10:30:00",
  "note": "This is a sample note."
}
```

### **POST /notes**  
Create a new note.  
**Request Body:**
```json
{
  "title": "New Note",
  "datetime": "2024-12-03T10:30:00",
  "note": "This is a new note created via API."
}
```
**Sample Response:**
```json
{
  "message": "Note created successfully"
}
```

### **PUT /notes/:id**  
Update an existing note.  
**Parameters:**  
- `id` (number): The unique ID of the note.  

**Request Body:**
```json
{
  "title": "Updated Note Title",
  "datetime": "2024-12-04T12:00:00",
  "note": "Updated content of the note."
}
```
**Sample Response:**
```json
{
  "message": "Note updated successfully"
}
```

### **DELETE /notes/:id**  
Delete a note by ID.  
**Parameters:**  
- `id` (number): The unique ID of the note.  

**Sample Response:**
```json
{
  "message": "Note deleted successfully"
}
```

## File Structure
```
notes-backend/
├── controllers/          
│   └── notesController.js
├── db/                   
│   └── connection.js
├── routes/               
│   └── notes.js
├── .env                  
├── .gitignore            
├── server.js             
├── package.json          
└── README.md             
```

## Troubleshooting
1. Ensure the MySQL database is running and accessible.
2. Verify the `.env` file is correctly configured with valid database credentials.
3. Check error messages in the console and adjust the configuration as needed.

## License
This project is licensed under the MIT License. See the `LICENSE` file for details.
```