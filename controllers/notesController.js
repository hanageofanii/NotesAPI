const db = require("../db/connection");
const moment = require("moment-timezone");

exports.getAllNotes = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM notes");
    const notes = rows.map((note) => ({
      ...note,
      datetime: moment(note.datetime)
        .tz("Asia/Jakarta")
        .format("YYYY-MM-DD HH:mm:ss"),
    }));
    res.status(200).json(notes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getNoteById = async (req, res) => {
  const { id } = req.params;
  try {
    const [rows] = await db.query("SELECT * FROM notes WHERE id = ?", [id]);
    if (rows.length === 0) {
      return res.status(404).json({ message: "Note not found" });
    }

    const note = {
      ...rows[0],
      datetime: moment(rows[0].datetime)
        .tz("Asia/Jakarta")
        .format("YYYY-MM-DD HH:mm:ss"),
    };

    res.status(200).json(note);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createNote = async (req, res) => {
  const { title, datetime, note } = req.body;
  try {
    // Convert datetime to the correct format for storage
    const formattedDatetime = moment(datetime)
      .tz("Asia/Jakarta")
      .format("YYYY-MM-DD HH:mm:ss");

    await db.query(
      "INSERT INTO notes (title, datetime, note) VALUES (?, ?, ?)",
      [title, formattedDatetime, note]
    );
    res.status(201).json({ message: "Note created successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateNote = async (req, res) => {
  const { id } = req.params;
  const { title, datetime, note } = req.body;
  try {
    // Convert datetime to the correct format for storage
    const formattedDatetime = moment(datetime)
      .tz("Asia/Jakarta")
      .format("YYYY-MM-DD HH:mm:ss");

    const [result] = await db.query(
      "UPDATE notes SET title = ?, datetime = ?, note = ? WHERE id = ?",
      [title, formattedDatetime, note, id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Note not found" });
    }

    res.status(200).json({ message: "Note updated successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteNote = async (req, res) => {
  const { id } = req.params;
  try {
    const [result] = await db.query("DELETE FROM notes WHERE id = ?", [id]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Note not found" });
    }
    res.status(200).json({ message: "Note deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
