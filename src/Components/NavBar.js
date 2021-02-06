import React, { useState } from "react";
import logo from "../img/chatcloudb.png";
import { FiSearch } from "react-icons/fi";
import { MdKeyboardArrowDown, MdPerson } from "react-icons/md";
import { FaBell } from "react-icons/fa";
import gsap, { Power3 } from "gsap";
import Dropdown from "rc-dropdown";
import Menu, { Item as MenuItem } from "rc-menu";

function NavBar({ setOpen }) {
    const [language, setLanguage] = useState("en");

    const languages = ["en", "sp", "jp"];
    const menu = (
        <Menu
            onSelect={({ key }) => {
                setLanguage(key);
            }}
        >
            {languages.map((type) => {
                return <MenuItem key={type}>{type}</MenuItem>;
            })}
        </Menu>
    );

    return (
        <div className="NavBar container-fluid">
            <div className="row">
                <div className="logo main col-3">
                    <img src={logo} alt="logo" />
                    <div
                        className="navBarBtn"
                        onClick={() => {
                            setOpen(true);
                        }}
                        onMouseEnter={() => {
                            gsap.from(".line", {
                                width: 0,
                                ease: Power3,
                                stagger: { each: 0.125 },
                            });
                        }}
                    >
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </div>
                </div>
                <div className="search col-6 mobile">
                    <div className="searchbar">
                        <div className="searchBarConatiner">
                            <span className="searchIcon">
                                <FiSearch color="white" />
                            </span>
                            <input type="text" name="search" id="search" placeholder="Search" />
                        </div>
                    </div>
                    <div className="logo mobile">
                        <img src={logo} alt="logo" />
                    </div>
                </div>
                <div className="utils col-3">
                    <Dropdown
                        trigger={["click"]}
                        overlay={menu}
                        animation="slide-up"
                        closeOnSelect={false}
                        openClassName={"drop"}
                    >
                        <div className={`language`}>
                            <div className="d-flex justify-content-lg-between align-items-center lang-box">
                                {language}
                                <span>
                                    <MdKeyboardArrowDown size="1.4rem" />
                                </span>
                            </div>
                        </div>
                    </Dropdown>
                    <div className="notification">
                        <div className="notification-container">
                            <FaBell color="white" fill="white" size=".9rem" />
                            <span className="count"></span>
                        </div>
                    </div>

                    <div className="profile">
                        <div className="profile-container">
                            <MdPerson size="2.5rem" color="white" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavBar;
