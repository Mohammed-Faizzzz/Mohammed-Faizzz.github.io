import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import AboutMe from './AboutMe';
import Work from './Work';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function Home() {
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
      <div className='main'>
        <Sidebar />
        <AboutMe />
      </div>
      <footer className="App-footer">
        <p>&copy; 2024 Mohammed Faiz</p>
      </footer>
    </div>
  );
}

function App() {
  return (
    // <Router>
    //   <Route exact path="/" component={Home} />
    //   <Route path="/about" component={AboutMe} />
    //   <Route path="/work" component={Work} />
    //   <Route path="/projects" component={Projects} />
    //   <Route path="/academics" component={Academics} />
    // </Router>
    <Home />
  );
}

export default App;
