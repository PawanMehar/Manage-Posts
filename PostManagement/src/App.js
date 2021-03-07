import React from "react";
import About from "./components/About";
import Contacts from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar"
import {BrowserRouter, BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Post from "./components/Post";
import CreatePost from "./components/CreatePost";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contacts} />
            <Route path='/create' component={CreatePost} />
            <Route path='/:post_id' component={Post} />
          </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
