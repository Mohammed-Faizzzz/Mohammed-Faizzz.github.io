import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>About Faiz</h1>
      </header>
      <section className="App-section">
        <p>
          Welcome to my personal website! Here you'll find information about my journey, experiences, and skills.
        </p>
      </section>
      <div className='main-paras'>
      <p className='App-para'>Hello There! I am Faiz, a penultimate Computer Science student at the National University of Singapore. My areas of interest 
         include Web Development, Machine Learning, Robotics, and Cybersecurity. I love using technology to make everyday life easier:
         I even built a telebot with my friends to keep ourselves accountable to solve Leetcode questions everyday! The need for tech 
         is vast, and I’m excited to learn about it and put tech to good use!</p>

       <p className='App-para'>On a personal note, I enjoy watching F1 race weekends! I am a big fan of reigning F1 World Champion Max Verstappen. His 
        competitive spirit and deep passion for the sport appeals to me. F1 also involves a diverse range of strategies employed by 
        teams and drivers, on and off the track, to gain the slightest edge over their competitors - it amazes me how competition 
        often breeds innovation. As for sports that I play, the six years playing cricket for my school team taught me valuable life 
        skills like teamwork and resilience, which I carry into my professional life.</p>
        
       <p className='App-para'>An adrenaline junkie at heart, I love pushing my limits through activities like scuba diving and go-karting. I also plan to 
          try paragliding, surfing, and skydiving in the near future. These experiences not only provide thrills but also build my 
          confidence and courage. Furthermore, by constantly stepping out of my comfort zone, I have the opportunity to consistently 
          redfine the boundaries of my comfort zone, broadening it. My friends and I often introduce each other to new hobbies, and 
          I’m excited to soon try rollerblading and Brazilian Jiu Jitsu. We even plan group adventures like climbing Mount Bromo!</p>

       <p className='App-para'> I also cherish solo trips, having explored places like Bali and Rome. These journeys foster my independence, enhance my 
        communication skills, and allow me to form lifelong friendships. Solo travel has been instrumental in my personal growth, 
        giving me the confidence to embrace new challenges. </p>
      </div>
      <footer className="App-footer">
        <p>&copy; 2024 Mohammed Faiz</p>
      </footer>
    </div>
  );
}

export default App;
