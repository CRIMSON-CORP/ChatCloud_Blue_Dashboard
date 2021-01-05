import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Main from "./Components/Main";
import NavBar from "./Components/NavBar";
import Tabs from "./Components/Tabs";

function App() {
    return (
        <div className="container50">
            <NavBar />
            <div className="container-fluid mt-5 board">
                <div className="row">
                    <Router>
                        <div className="col-3 tabs">
                            <Tabs />
                        </div>
                        <div className="col-9 panel">
                            <Main />
                        </div>
                    </Router>
                </div>
            </div>
        </div>
    );
}

export default App;
