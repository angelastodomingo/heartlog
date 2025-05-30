import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './features.css';
import axios from 'axios';
import logo from './assets/heartlog-logo2.png';

function Create() {
  const [entries, setEntries] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    mood: '',
    entry: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title.trim() || !formData.mood || !formData.entry.trim()) return;

    const newEntry = {
      ...formData,
      dateTime: new Date().toLocaleString(),
    };

    setEntries((prev) => [newEntry, ...prev]);
    setFormData({ title: '', mood: '', entry: '' });
  };

  return (
    <>

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link
        href="https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Neucha&display=swap"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
      />

      {/*navbar*/}
      <nav className="navbar">
        <div className="nav-left">
          <NavLink
            to="/create"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            Create an Entry
          </NavLink>
          <NavLink
            to="/habit"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            Habit Tracker
          </NavLink>
        </div>

        <div className="nav-center">
          <img src={logo} alt="Logo" className="nav-logo" />
        </div>

        <div className="nav-right">
          <NavLink
            to="/art"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            Art Therapy
          </NavLink>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            Log Out
          </NavLink>
        </div>
      </nav>

      {/*journal part*/}
      <div className="journal-app">
        <h1 className="journal-title">
          <i className="fas fa-book-open icon"></i> My Journal
        </h1>

        <form id="journalForm" onSubmit={handleSubmit} className="journal-form">
          <label htmlFor="title">Entry Title</label>
          <input
            type="text"
            id="title"
            name="title"
            required
            value={formData.title}
            onChange={handleChange}
            className="form-input"
          />

          <label htmlFor="mood">Select Your Mood</label>
          <select
            id="mood"
            name="mood"
            required
            value={formData.mood}
            onChange={handleChange}
            className="form-input"
          >
            <option value="" disabled>
              Select mood
            </option>
            <option value="😊 Happy">😊 Happy</option>
            <option value="😢 Sad">😢 Sad</option>
            <option value="😠 Angry">😠 Angry</option>
            <option value="😴 Tired">😴 Tired</option>
            <option value="😐 Neutral">😐 Neutral</option>
            <option value="😵‍💫 Complicated">😵‍💫 Complicated</option>
          </select>

          <label htmlFor="entry">Your Entry</label>
          <textarea
            id="entry"
            name="entry"
            rows="5"
            required
            value={formData.entry}
            onChange={handleChange}
            className="form-textarea"
          ></textarea>

          <button type="submit" className="submit-button">
            Add Entry
          </button>
        </form>

        <div className="entries" id="entriesContainer">
          {entries.map(({ title, mood, entry, dateTime }, index) => (
            <div className="card" key={index}>
              <h3>{title}</h3>
              <div className="mood">{mood}</div>
              <div className="datetime">{dateTime}</div>
              <p>{entry}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Create;