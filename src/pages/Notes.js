import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    loadNotes();
  }, []);

  const loadNotes = () => {
    const storedNotes = JSON.parse(localStorage.getItem("notes") || "[]");
    setNotes(storedNotes);
  };

  const handleDelete = (id) => {
    if (window.confirm("Silmek istediğinize emin misiniz?")) {
      const updatedNotes = notes.filter((note) => note.id !== id);
      setNotes(updatedNotes);
      localStorage.setItem("notes", JSON.stringify(updatedNotes));
      alert("Not silinmiştir.");
    }
  };

  const filteredNotes = notes
    .filter((note) => note.text.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => {
      if (a.priority === b.priority) {
        return new Date(b.createdAt) - new Date(a.createdAt); // yeni üstte
      }
      return sortOrder === "asc" ? a.priority - b.priority : b.priority - a.priority;
    });

  return (
    <div className="container mt-4">
      <h2>Not Listesi</h2>

      <div className="d-flex justify-content-between align-items-center mb-3">
        <input
          type="text"
          className="form-control w-50"
          placeholder="Ara..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select
          className="form-select w-auto"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="asc">Öncelik: En Düşük → En Yüksek</option>
          <option value="desc">Öncelik: En Yüksek → En Düşük</option>
        </select>
      </div>

      {filteredNotes.length === 0 ? (
        <p>Henüz içerik girilmedi veya aramanızla eşleşen bir sonuç bulunamadı.</p>
      ) : (
        <ul className="list-group">
          {filteredNotes.map((note) => (
            <li
              key={note.id}
              className="list-group-item d-flex justify-content-between align-items-center"
              style={{ cursor: "default" }}
            >
              <div>
                <strong>Öncelik: {note.priority}</strong> - {note.text}
              </div>
              <div className="d-flex gap-2">
                <Link className="btn btn-sm btn-outline-primary" to={`/edit-note/${note.id}`}>
                  Düzenle
                </Link>
                <button
                  className="btn btn-sm btn-outline-danger"
                  onClick={() => handleDelete(note.id)}
                >
                  Sil
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Notes;
