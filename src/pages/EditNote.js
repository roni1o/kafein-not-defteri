import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditNote = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [noteText, setNoteText] = useState("");
  const [priority, setPriority] = useState("");

  useEffect(() => {
    const notes = JSON.parse(localStorage.getItem("notes") || "[]");
    const note = notes.find((n) => n.id === Number(id));
    if (note) {
      setNoteText(note.text);
      setPriority(note.priority);
    } else {
      alert("Not bulunamadı.");
      navigate("/notes");
    }
  }, [id, navigate]);

  const handleUpdate = (e) => {
    e.preventDefault();
    if (!noteText.trim()) {
      alert("Not bilgisi zorunludur.");
      return;
    }

    const notes = JSON.parse(localStorage.getItem("notes") || "[]");
    const updatedNotes = notes.map((n) =>
      n.id === Number(id) ? { ...n, text: noteText, priority: priority ? Number(priority) : 0 } : n
    );

    localStorage.setItem("notes", JSON.stringify(updatedNotes));
    alert("Not güncellenmiştir.");
    navigate("/notes");
  };

  return (
    <div className="container mt-4">
      <h2>Not Güncelle</h2>
      <form onSubmit={handleUpdate}>
        <div className="mb-3">
          <label className="form-label">
            Not Bilgisi <span className="text-danger">*</span>
          </label>
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
        <button type="submit" className="btn btn-primary">
          Güncelle
        </button>
      </form>
    </div>
  );
};

export default EditNote;
