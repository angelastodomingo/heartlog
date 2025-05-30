import React, { useEffect, useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import './art.css';
import logo from './assets/heartlog-logo2.png';
import 'bootstrap-icons/font/bootstrap-icons.css';


const Art = () => {
  const [artData, setArtData] = useState(null);
  const imageRef = useRef(null);
  const intervalRef = useRef(null);

  const fetchAndSetRandomArtwork = (artworks) => {
    const publicImages = artworks.filter(
      (post) => post.is_public_domain && post.image_id != null
    );

    const randomIndex = Math.floor(Math.random() * publicImages.length);
    const post = publicImages[randomIndex];

    setArtData({
      id: post.id,
      image_id: post.image_id,
      title: post.title,
      artist_title: post.artist_title,
    });

    // Animation class (optional visual effect)
    if (imageRef.current) {
      imageRef.current.classList.add('animating');
      setTimeout(() => {
        imageRef.current.classList.remove('animating');
      }, 1500);
    }
  };

  useEffect(() => {
    const url =
      'https://api.artic.edu/api/v1/artworks?fields=id,image_id,title,artist_title,date_display,provenance_text,is_public_domain&limit=40';

    fetch(url)
      .then((response) => {
        if (!response.ok) throw new Error('API error');
        return response.json();
      })
      .then((data) => {
        const artworks = data.data;
        fetchAndSetRandomArtwork(artworks);

        //changes art every 10secs
        intervalRef.current = setInterval(() => {
          fetchAndSetRandomArtwork(artworks);
        }, 10000);
      })
      .catch((error) => console.error(error));

    return () => clearInterval(intervalRef.current); 
  }, []);

  return (
    <>
      {/*navbar*/}
      <nav className="navbar">
        <div className="nav-left">
          <NavLink to="/create" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            Create an Entry
          </NavLink>
          <NavLink to="/habit" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            Habit Tracker
          </NavLink>
        </div>

        <div className="nav-center">
          <img src={logo} alt="Logo" className="nav-logo" />
        </div>

        <div className="nav-right">
          <NavLink to="/art" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            Art Therapy
          </NavLink>
          <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            Log Out
          </NavLink>
        </div>
      </nav>

      {/*api*/}
      <div className="container-fluid">
        <div className="row m-5">
          <div className="col-8 artcol">
            <div className="latest-data-item">
              <a
                id="art"
                target="_blank"
                rel="noreferrer"
                href={artData ? `https://www.artic.edu/artworks/${artData.id}` : '#'}
              >
                <img
                  ref={imageRef}
                  id="api-img"
                  className="show"
                  src={
                    artData
                      ? `https://www.artic.edu/iiif/2/${artData.image_id}/full/843,/0/default.jpg`
                      : ''
                  }
                  alt="Art"
                />
              </a>
              <h3 id="api-title">{artData ? `"${artData.title}"` : ''}</h3>
              <p id="subhead">{artData ? `By: ${artData.artist_title}` : ''}</p>
            </div>

            <div className="side">
              <i

                style={{ cursor: 'pointer' }}
                onClick={() => fetchAndSetRandomArtwork([artData])}
              ></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Art;
