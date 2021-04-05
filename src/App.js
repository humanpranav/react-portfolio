import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import SimpleReact from "./components/pages/SimpleReact";

import SignUp from "./components/pages/SignUp";
import Home from "./components/pages/Home";
import ResumeSorter from "./components/pages/ResumeSorter";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/simplereact" component={SimpleReact} />
          <Route path="/resumesorter" component={ResumeSorter} />
          <Route path="/sign-up" component={SignUp} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
