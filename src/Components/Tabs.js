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
import { IconContext } from "react-icons";
import { NavLink } from "react-router-dom";

function Tabs({ setOpen }) {
    const TabsArr = [
        {
            head: "Dashboard",
            link: "/",
            icon: <MdDashboard />,
        },
        {
            head: "Conversation",
            link: "/Conversations",
            icon: <MdMessage />,
        },
        {
            head: "Widgets",
            link: "/Widgets",
            icon: <MdWidgets />,
        },
        {
            head: "Options",
            link: "/Options",
            icon: <MdSettings />,
        },
        {
            head: "Scripts",
            link: "/Scripts",
            icon: <MdDescription />,
        },
        {
            head: "Statistics",
            link: "/Statistics",
            icon: <MdAssessment />,
        },
        {
            head: "Download/Plugins",
            link: "/Download_Plugins",
            icon: <MdArrowDownward />,
        },
        {
            head: "FAQ",
            link: "/Faqs",
            icon: <MdQuestionAnswer />,
        },
    ];
    const TabsJSX = TabsArr.map(({ head, link, icon }, index) => {
        return (
            <NavLink
                to={link}
                exact
                activeClassName="active"
                key={index}
                onClick={() => {
                    setOpen(false);
                }}
            >
                <li className="list-group-item tab r-i-c">
                    {icon}
                    <h2>{head}</h2>
                </li>
            </NavLink>
        );
    });
    return (
        <div className="routes">
            <div className="routes-wrapper">
                <div className="container-fluid">
                    <div className="row d-flex flex-column">
                        <ul className="route-tabs list-group">
                            <IconContext.Provider value={{ size: 30 }}>
                                {TabsJSX}
                            </IconContext.Provider>
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
