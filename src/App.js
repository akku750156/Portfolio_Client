import "./App.css";
import Home from "./Components/Home";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import About from "./Components/About";
import Experience from "./Components/Experience";
import Techs from "./Components/Techs";
import Connect from "./Components/Connect";
import Projects from "./Components/Projects";
import Feedbacks from "./Components/Feedbacks";
// import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/About" component={About}></Route>
            <Route exact path="/Experience" component={Experience}></Route>
            <Route exact path="/Techs" component={Techs}></Route>
            <Route exact path="/Projects" component={Projects}></Route>
            <Route exact path="/Feedbacks" component={Feedbacks}></Route>
          </Switch>
        </Router>
        <Connect />
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default App;
