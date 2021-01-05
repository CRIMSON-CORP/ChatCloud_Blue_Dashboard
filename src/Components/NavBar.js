import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import OnOutsiceClick from "react-outclick";
import logo from "../img/chatcloudb.png";
import { FiSearch } from "react-icons/fi";
import { MdKeyboardArrowDown, MdPerson } from "react-icons/md";
import { FaBell } from "react-icons/fa";

function NavBar() {
    const [language, setLanguage] = useState("en");
    const [langDrop, setLangDrop] = useState(false);
    const [languages] = useState(["en", "sp", "jp"]);

    var list = languages.map((language, index) => {
        return (
            <li
                key={index}
                className="list-group-item"
                onClick={() => {
                    setLanguage(language);
                    setLangDrop(false);
                }}
            >
                {language}
            </li>
        );
    });

    return (
        <div className="NavBar container-fluid">
            <div className="row">
                <div className="logo col-3">
                    <img src={logo} alt="logo" />
                </div>
                <div className="search col-6">
                    <div className="searchbar">
                        <div className="searchBarConatiner">
                            <span className="searchIcon">
                                <FiSearch color="white" size="1.3750em" />
                            </span>
                            <input type="text" name="search" id="search" placeholder="Search" />
                        </div>
                    </div>
                </div>
                <div className="utils col-3">
                    <OnOutsiceClick
                        onOutsideClick={() => {
                            setLangDrop(false);
                        }}
                    >
                        <div className="language">
                            <div
                                className="d-flex justify-content-lg-between align-items-center lang-box"
                                onClick={() => {
                                    setLangDrop(!langDrop);
                                }}
                            >
                                {language}
                                <span>
                                    <MdKeyboardArrowDown size="1.4rem" />
                                </span>
                            </div>
                            <CSSTransition
                                in={langDrop}
                                timeout={400}
                                classNames="drop"
                                unmountOnExit
                            >
                                <div className="card drop-down shadow">
                                    <div className="card-header">Language</div>

                                    <div className="card-body">
                                        <ul className="list-group">{list}</ul>
                                    </div>
                                </div>
                            </CSSTransition>
                        </div>
                    </OnOutsiceClick>

                    <div className="notification">
                        <div className="notification-container">
                            <FaBell color="white" fill="white" size="1rem" />
                            <span className="count"></span>
                        </div>
                    </div>

                    <div className="profile">
                        <div className="profile-container">
                            <MdPerson size="3.125rem" color="white" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavBar;
