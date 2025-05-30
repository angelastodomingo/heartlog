import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import logo from './assets/heartlog-logo2.png';
import styles from './Habit.module.css';

function Habit() {
  useEffect(() => {
    const date = new Date();
    const currentMonth = date.getMonth();
    const currentDate = date.getDate();
    const currentYear = date.getFullYear();

    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December',
    ];

    //month title 
    const title = document.getElementById('title');
    if (title) title.innerHTML = months[currentMonth];

    //gives the user the ability to edit their habit 
    const habitTitle = document.getElementById('habitTitle');
    if (habitTitle) {
      habitTitle.onclick = function () {
        let habits = prompt("What's on the agenda today?", habitTitle.innerHTML);
        if (!habits || habits.length === 0) {
          habitTitle.innerHTML = "Click to see your habit";
        } else {
          habitTitle.innerHTML = habits;
        }
      };
    }

    //days in each month 
    const daysInTheMonthList = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const daysInThisMonth = daysInTheMonthList[currentMonth];

    let daysCompleted = 0;
    const totalDays = document.getElementById('totalDays');

    let dayCount = 0;
    let rowCount = 0;
    const days = document.getElementsByClassName(styles.days);
    for (let i = 0; i < days.length; i++) {
      const day = days[rowCount].getElementsByClassName(styles.day);
      for (let j = 0; j < day.length; j++) {
        if (dayCount === currentDate - 1) {
          day[j].style.border = '2px solid black';
        }

        if (dayCount < daysInThisMonth) {
          day[j].innerHTML = dayCount + 1;
          day[j].id = 'day' + (dayCount + 1);
          dayCount++;
        } else {
          day[j].innerHTML = '';
          day[j].style.backgroundColor = 'white';
        }
      }
      rowCount++;
    }

    //initializes localstorage for days 
    for (let i = 0; i < dayCount; i++) {
      const tempString = `${currentMonth + 1}-${i + 1}-${currentYear}`;
      const tempDay = localStorage.getItem(tempString);
      if (tempDay === null || tempDay === 'false') {
        localStorage.setItem(tempString, 'false');
      } else if (tempDay === 'true') {
        daysCompleted++;
      }
    }

    if (totalDays) totalDays.innerHTML = `${daysCompleted}/${daysInThisMonth}`;

    // Color days based on localStorage
    for (let i = 0; i < currentDate; i++) {
      const tempString = `${currentMonth + 1}-${i + 1}-${currentYear}`;
      const chosenDay = localStorage.getItem(tempString);
      const chosenDayDiv = document.getElementById('day' + (i + 1));
      if (chosenDay === 'true') {
        chosenDayDiv.style.backgroundColor = 'pink';
      } else {
        chosenDayDiv.style.backgroundColor = 'white';
      }
    }

    //click handlers to toggle completion 
    const dayDivs = document.querySelectorAll(`.${styles.day}`);
    for (let i = 0; i < currentDate; i++) {
      dayDivs[i].onclick = function (e) {
    const num = e.target.innerText;
    const selectedDate = document.getElementById(e.target.id);
    const storageString = `${currentMonth + 1}-${num}-${currentYear}`;

    if (localStorage.getItem(storageString) === 'false') {
    selectedDate.style.backgroundColor = 'pink';
    localStorage.setItem(storageString, 'true');
  } else {
    selectedDate.style.backgroundColor = 'white';
    localStorage.setItem(storageString, 'false');
  }

  //recalculates days completed after change 
  let newDaysCompleted = 0;
  for (let d = 0; d < currentDate; d++) {
    const dayKey = `${currentMonth + 1}-${d + 1}-${currentYear}`;
    if (localStorage.getItem(dayKey) === 'true') newDaysCompleted++;
  }

  totalDays.innerHTML = `${newDaysCompleted}/${dayCount}`;

  if (newDaysCompleted === currentDate) {
    alert('Great progress!');
  }
};

    }

    //reset btn 
    const resetButton = document.getElementById('resetButton');
    if (resetButton) {
      resetButton.onclick = function () {
        for (let i = 0; i < dayCount; i++) {
          const tempString = `${currentMonth + 1}-${i + 1}-${currentYear}`;
          localStorage.setItem(tempString, 'false');
          const curDay = document.getElementById('day' + (i + 1));
          curDay.style.backgroundColor = 'white';
        }
        daysCompleted = 0;
        totalDays.innerHTML = `${daysCompleted}/${daysInThisMonth}`;
      };
    }
  }, []);

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navLeft}>
          <NavLink to="/create" className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}>
            Create an Entry
          </NavLink>
          <NavLink to="/habit" className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}>
            Habit Tracker
          </NavLink>
        </div>
        <div className={styles.navCenter}>
          <img src={logo} alt="Logo" className={styles.navLogo} />
        </div>
        <div className={styles.navRight}>
          <NavLink to="/art" className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}>
            Art Therapy
          </NavLink>
          <NavLink to="/" className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}>
            Log Out
          </NavLink>
        </div>
      </nav>

      <h1 id="title" className={styles.title}>Month</h1>
      <h2 id="subtitle" className={styles.subtitle}>Monthly Habit Tracker</h2>

      <div className={styles.calendarContainer}>
        <div className={styles.calendarDiv}>
          <div id="calendarHeading" className={styles.calendarHeading}>
            <p id="habitTitle" className={styles.habitTitle}>My New Habit</p>
            <p id="totalDays" className={styles.totalDays}>0/31</p>
          </div>
          <div id="calendarContent" className={styles.calendarContent}>
            <div id="tracker">
              {[...Array(5)].map((_, i) => (
                <div className={styles.days} key={i}>
                  {[...Array(7)].map((_, j) => (
                    <div className={styles.day} key={j}>1</div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <button id="resetButton" className={styles.resetButton}>Reset</button>
    </>
  );
}

export default Habit;
