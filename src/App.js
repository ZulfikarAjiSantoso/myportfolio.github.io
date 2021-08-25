import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import About from './component/About';
import Contact from './component/Contact';
import Footer from './component/Footer';
import Header from './component/Header';
import Nav from './component/Nav';
import Project from './component/Project';

import Services from './component/Services';

function App() {

  return (

    <Router>
      <Nav />
      {/* <Switch> */}
      {/* <Route path="/"> */}
      <Header/>
      {/* </Route> */}
      {/* <Route path="/about"> */}
      <About/>
      {/* </Route> */}
      {/* <Route path="/services"> */}
      <Services />
      {/* </Route> */}
      {/* <Route path="/project"> */}
  
      {/* </Route> */}
      {/* </Switch>  */}
      <Project/>
      <Contact/>
      <Footer />
    </Router>

  );
}

export default App;
 