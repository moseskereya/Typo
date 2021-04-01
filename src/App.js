import { BrowserRouter as Router, Route, Switch} from "react-router-dom"
import './App.css';
import Nav from "./Components/Nav"
import Home from "./Components/Home"
import Projects from "./Components/Projects";
import About from "./Components/About";
import Contact from "./Components/Contact"
import NotFound from "./Components/NotFound"
function App() {
    return (
        <Router>
        <div className="App">
            <Nav />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/projects" component={Projects} />
                <Route path="/contacts" component={Contact} />
                <Route path="/about" component={About} />
                <Route path="*" component={NotFound}/>
             </Switch>
            </div>
        </Router>
  );
}

export default App;
