import React from 'react';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Footer from './Components/Footer/footer';
import NavBar from './Components/NavBar/navBar';

import ContactPage from './Pages/Contact/contactPage';
import HomePage from './Pages/Home/homePage';
import ProjectsPage from './Pages/Projects/projectsPage';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/radumihaisirbu" exact component = {HomePage}/>
          <Route path="/contact" exact component = {ContactPage} />
          <Route path="/projects" exact component = {ProjectsPage}/>
        </Switch>
        <Footer/>
      </Router>
    </>
  )
}

export default App;
