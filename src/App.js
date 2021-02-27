import CreateNote from "./views/createNote";
import Notes from "./views/notes";
import Map from "./views/map";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Router>
            <div style={styleNavbar}>
                <Link to="/">Notes</Link>
                <Link to="/create">Create</Link>
                <Link to="/map">Map</Link>
            </div>
            <Switch>
                <Route exact path="/">
                    <Notes />
                </Route>
                <Route path="/create">
                    <CreateNote />
                </Route>
                <Route exact path="/map">
                    <Map />
                </Route>
            </Switch>
        </Router>
    </div>
  );
}

const styleNavbar = {
    display: "flex",
    justifyContent: "space-around",
    padding: 10,
}

export default App;
