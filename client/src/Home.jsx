// src/Home.jsx
import React from 'react';
import './styles.css'; 
import logo from './assets/heartlog-logo2.png'; 
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <div>
      <nav className="navbar">
      <div className="nav-left">
        <span><span className="heart-red">heart</span>log</span>
      </div>


        <div className="nav-center">
          <img src={logo} alt="Logo" className="nav-logo" />
        </div>

        <div className="nav-right">
          <a className="active" href="/">Home</a>
          <a href="/about">About</a>
          <a href="/register">Sign Up</a>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-overlay">
          <h1>Your own personal journal</h1>
          <p>write freely. feel deeply. it’s all yours.</p>
          <Link to="/register" className="hero-button">
          Log your first thought
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
