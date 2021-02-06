import React, { useState } from "react";
import { HashRouter as Router } from "react-router-dom";
import Main from "./Components/Main";
import NavBar from "./Components/NavBar";
import Tabs from "./Components/Tabs";
import { CgClose } from "react-icons/cg";

function App() {
    const [open, setOpen] = useState(false);
    return (
        <div className="container-fluid">
            <NavBar setOpen={setOpen} />
            <div className="container-fluid mt-4 board">
                <div className="row main-controller">
                    <Router>
                        <div className={`tabs ${open && "open"}`}>
                            <CgClose
                                className={"closeIcon"}
                                onClick={() => {
                                    setOpen(false);
                                }}
                            />
                            <Tabs setOpen={setOpen} />
                        </div>
                        <div className="panel">
                            <Main />
                        </div>
                    </Router>
                </div>
            </div>
        </div>
    );
}

export default App;
