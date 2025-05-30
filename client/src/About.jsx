import React from 'react';
import './styles.css'; 

import logo from './assets/heartlog-logo2.png'; 
import aboutImage1 from './assets/Group 8.png';
import aboutImage2 from './assets/aboutpic1.png';
import aboutImage3 from './assets/doodle2.png';
import aboutImage4 from './assets/aboutpic3.png';

const About = () => {
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
          <a href="/">Home</a>
          <a className="active" href="/about">About</a>
          <a href="/register">Sign Up</a>
        </div>
      </nav>

      <section className="about-section">
        <div className="about-text">
          <p>
            heartlog is a student project made for university purposes.
            it's something that lets me create a site i want while also
            refining my dev skills at the same time.
          </p>
          <p>
            it's not a super original concept since there are countless
            journal / diary concepts already out there, so i thought i'd add
            in features that would improve its usability a little bit more,
            like the habit tracker and an art therapy section (which pulls
            some amazing pieces via the Art Institute of Chicago's API).
          </p>
        </div>
        <div className="about-image">
          <img src={aboutImage1} alt="Heartlog collage" />
        </div>
      </section>

      <section className="about-section reverse">
        <div className="about-text">
          <p>
            why those features? well, keeping track of your habits in everyday life helps improve your routine if you're struggling with it (like i am). or, you could also just use it as a reminder to do stuff—like, i don’t know, give your cat many pets or hit your recommended water intake for the day. i know i do that daily. and the art therapy section? well, sometimes, looking at art people made before you were born is weirdly therapeutic, and it definitely beats doom-scrolling (which i also struggle with).
          </p>
          <p>
            that's why i called it "art therapy"—it's like a detox from all those brain rot contents you see on social media nowadays and sorta heals your brain a bit. it’s not a total fix for our fried attention spans or a cure for social media addiction, but hey… it helps, even just a little.
          </p>
        </div>
        <div className="about-image">
          <img src={aboutImage2} alt="Heartlog collage" />
        </div>
      </section>

      <section className="about-section second">
        <div className="about-text">
          <p>
            but anyway, why would i choose to make this sorta site, you may ask (or not lol)? it's because i myself digitally journal daily, but there's always this fear in the back of my head that someone is reading all of my entries... so you know what? i could just create my own site where i, and only i, get to view my entries and no third party ever will (looking at you, google). i want that for you as well, since privacy is such a rarity, especially nowadays with A.I. more present and prevalent more than ever, so here's a space that's just yours.
          </p>
          <p>
            though yes, it’s true the site requires an account to use it, i want you to know i don’t actually have the power (or care, tbh) to view your data. what you write stays with you. i don’t collect anything, and i never will.
          </p>
        </div>
        <div className="about-image">
          <img src={aboutImage3} alt="Heartlog collage" />
        </div>
      </section>

      <section className="about-section third">
        <div className="about-text">
          <p>
            the account system’s only there so you can switch users or log out quickly if someone’s snooping over your shoulder or whatever, i don't know. i built this for privacy, not surveillance.
          </p>
          <p>
            but i’ll be real with you. technically, if i wanted to, i could take a peek at your entries. that’s just how backend storage works. but i’d never do that, and i promise you i won’t. i’ve got zero reason to. if that bugs you though, you’re totally welcome to fork the project and self-host it. no hard feelings. just please don’t take credit for the original, yeah? 💖
          </p>
          <p>
            i hope you enjoy my gift to you, dear user. use it well to get through challenges in your life, and best of luck to you.
          </p>
        </div>
        <div className="about-image">
          <img src={aboutImage4} alt="Heartlog collage" />
        </div>
      </section>
    </div>
  );
};

export default About;
