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
import { NavLink } from "react-router-dom";

function Tabs() {
    return (
        <div className="routes">
            <div className="routes-wrapper">
                <div className="container-fluid">
                    <div className="row d-flex flex-column">
                        <ul className="route-tabs list-group">
                            <NavLink to="/" exact activeClassName="active">
                                <li className="list-group-item tab r-i-c">
                                    <MdDashboard size="30px" />
                                    <h2>Dashboard</h2>
                                </li>
                            </NavLink>
                            <NavLink to="/Conversations" activeClassName="active">
                                <li className="list-group-item tab r-i-c">
                                    <MdMessage size="30px" />
                                    <h2>Conversations</h2>
                                </li>
                            </NavLink>
                            <NavLink activeClassName="active" exact to="/Widgets">
                                <li className="list-group-item tab r-i-c">
                                    <MdWidgets size="30px" />
                                    <h2>Widgets</h2>
                                </li>
                            </NavLink>
                            <NavLink activeClassName="active" exact to="/Options">
                                <li className="list-group-item tab r-i-c">
                                    <MdSettings size="30px" />
                                    <h2>Options</h2>
                                </li>
                            </NavLink>
                            <NavLink activeClassName="active" exact to="/Scripts">
                                <li className="list-group-item tab r-i-c">
                                    <MdDescription size="30px" />
                                    <h2>Scripts</h2>
                                </li>
                            </NavLink>
                            <NavLink activeClassName="active" exact to="/Statistics">
                                <li className="list-group-item tab r-i-c">
                                    <MdAssessment size="30px" />
                                    <h2>Statistics</h2>
                                </li>
                            </NavLink>
                            <NavLink activeClassName="active" exact to="/Download_Plugins">
                                <li className="list-group-item tab r-i-c">
                                    <MdArrowDownward size="30px" />
                                    <h2>Download/Plugins</h2>
                                </li>
                            </NavLink>
                            <NavLink activeClassName="active" exact to="/Faqs">
                                <li className="list-group-item tab r-i-c">
                                    <MdQuestionAnswer size="30px" />
                                    <h2>FAQ</h2>
                                </li>
                            </NavLink>
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
