import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddNote = () => {
  const [noteText, setNoteText] = useState("");
  const [priority, setPriority] = useState("");
  const navigate = useNavigate();

  const handleSave = (e) => {
    e.preventDefault();
    if (!noteText.trim()) {
      alert("Not bilgisi zorunludur.");
      return;
    }

    // Notları localStorage'dan al
    const notes = JSON.parse(localStorage.getItem("notes") || "[]");

    const newNote = {
      id: Date.now(),
      text: noteText,
      priority: priority ? Number(priority) : 0,
      createdAt: new Date().toISOString(),
    };

    // Yeni notu başa ekle
    notes.unshift(newNote);
    localStorage.setItem("notes", JSON.stringify(notes));

    alert("Not eklenmiştir.");
    navigate("/notes");
  };

  return (
    <div className="container mt-4">
      <h2>Yeni Not Ekle</h2>
      <form onSubmit={handleSave}>
        <div className="mb-3">
          <label className="form-label">Not Bilgisi <span className="text-danger">*</span></label>
          <textarea
            className="form-control"
            value={noteText}
            onChange={(e) => setNoteText(e.target.value)}
            rows={4}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Öncelik Derecesi (0-5)</label>
          <input
            type="number"
            min="0"
            max="5"
            className="form-control"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Kaydet</button>
      </form>
    </div>
  );
};

export default AddNote;
