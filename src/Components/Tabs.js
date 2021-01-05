import React from "react";
import {
    MdArrowBack,
    MdArrowDownward,
    MdAssessment,
    MdDashboard,
    MdDescription,
    MdMessage,
    MdQuestionAnswer,
    MdSettings,
    MdWidgets,
} from "react-icons/md";
import { Link } from "react-router-dom";

function Tabs() {
    return (
        <div className="routes">
            <div className="routes-wrapper">
                <div className="container-fluid">
                    <div className="row d-flex flex-column">
                        <ul className="route-tabs list-group">
                            <Link to="/">
                                <li className="list-group-item tab r-i-c">
                                    <span className="rect"></span>
                                    <MdDashboard size="35px" />
                                    <h2>Dashboard</h2>
                                </li>
                            </Link>
                            <Link to="/Conversations">
                                <li className="list-group-item tab r-i-c">
                                    <span className="rect"></span>
                                    <MdMessage size="35px" />
                                    <h2>Conversations</h2>
                                </li>
                            </Link>
                            <Link to="/Widgets">
                                <li className="list-group-item tab r-i-c">
                                    <span className="rect"></span>
                                    <MdWidgets size="35px" />
                                    <h2>Widgets</h2>
                                </li>
                            </Link>
                            <Link to="/Options">
                                <li className="list-group-item tab r-i-c">
                                    <span className="rect"></span>
                                    <MdSettings size="35px" />
                                    <h2>Options</h2>
                                </li>
                            </Link>
                            <Link to="/Scripts">
                                <li className="list-group-item tab r-i-c">
                                    <span className="rect"></span>
                                    <MdDescription size="35px" />
                                    <h2>Scripts</h2>
                                </li>
                            </Link>
                            <Link to="/Statistics">
                                <li className="list-group-item tab r-i-c">
                                    <span className="rect"></span>
                                    <MdAssessment size="35px" />
                                    <h2>Statistics</h2>
                                </li>
                            </Link>
                            <Link to="/Download_Plugins">
                                <li className="list-group-item tab r-i-c">
                                    <span className="rect"></span>
                                    <MdArrowDownward size="35px" />
                                    <h2>Download/Plugins</h2>
                                </li>
                            </Link>
                            <Link to="/Faqs">
                                <li className="list-group-item tab r-i-c">
                                    <span className="rect"></span>
                                    <MdQuestionAnswer size="35px" />
                                    <h2>FAQ</h2>
                                </li>
                            </Link>
                            <div className="logout_wrapper">
                                <button className="logout_btn">
                                    <span>
                                        <MdArrowBack size="20px" />
                                    </span>
                                    <p>LOG OUT</p>
                                </button>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Tabs;
