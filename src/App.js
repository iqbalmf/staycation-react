import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import "assets/scss/styles.scss"
import LandingPages from "./elements/pages/LandingPages";

function App() {
    return (
        <div className="App">
            <Router>
                <Route path={"/"} component={LandingPages}/>
            </Router>
        </div>
    );
}

export default App;
