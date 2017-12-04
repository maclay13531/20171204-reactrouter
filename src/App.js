import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// BrowserRouter as Router is the main Component
// Link is the new anchor tag
// think of route like router.get... what to do if the user comes to this route
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Home from './home';
import About from './about';
import Topics from './topics';
import Movies from './movies';
import Movie from './movie';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="/about">ABOUT</Link></li>
                    <li><Link to="/topics">TOPICS</Link></li>
                    <li><Link to="/movies">MOVIES</Link></li>

                    <Route exact path="/" render={()=> (
                        <Home title="Home Page" teams={["pats", "vikings", "falcons"]} />
                    )} />
                    <Route path="/about" component={About} />
                    <Route path="/topics" component={Topics} />
                    <Route path="/movies" component={Movies} />
                    <Route path="/movies/:movieID" component={Movie} />
                </div>
            </Router>
        );
    }
}

export default App;

// <Route path="/topics" component={Home} />
// The link component will protect our app from leaving our .html page