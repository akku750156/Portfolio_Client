import "./App.css";
import Home from "./Components/Home";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import About from "./Components/About";
import Experience from "./Components/Experience";
import Techs from "./Components/Techs";
import Connect from "./Components/Connect";
import Projects from "./Components/Projects";
import Feedbacks from "./Components/Feedbacks";
import DSAData from "./Components/DSAData";
import Repository from "./Components/Repository";
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
            <Route exact path="/Repository" component={Repository}></Route>
            <Route exact path="/DSAData" component={DSAData}></Route>
          </Switch>
        </Router>
        <Connect />
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default App;
