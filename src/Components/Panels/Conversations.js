import React, { useState, useEffect } from "react";
import { FiUserCheck, FiAlertCircle } from "react-icons/fi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { NavLink, Route, Switch } from "react-router-dom";
import { TimelineLite } from "gsap";
import Dropdown from "rc-dropdown";
import Menu, { Item as MenuItem, Divider } from "rc-menu";
import { CSSTransition } from "react-transition-group";

function Conversations({
    props: {
        apiData: { conversations },
    },
}) {
    useEffect(() => {
        var tl = new TimelineLite({ duration: 0.25 });
        tl.from(".header_tag h3", { y: 20, opacity: 0 });
        tl.from(".convo_grid > div", {
            opacity: 0,
            scale: 0.9,
            transformOrigin: "center",
            stagger: { each: 0.25 },
            ease: "back.out(3)",
        });
        document.querySelector(".panel").scrollTop = 0;
    }, []);

    // Chat List
    var chatList = conversations.map(({ chatId, type }) => {
        return (
            <li key={chatId} className="chatList_item">
                <NavLink activeClassName="active" to={`/Conversations/${chatId}`}>
                    <div className={`icon_status ${type === "sucess" ? "success" : "pending"}`}>
                        {type === "sucess" ? (
                            <FiUserCheck size="18px" />
                        ) : (
                            <FiAlertCircle size="18px" />
                        )}
                    </div>
                    <div className="id">ChatID: {chatId}</div>
                </NavLink>
            </li>
        );
    });

    // conversations
    var messages = conversations.map(({ chatId, messages, userId }, index) => {
        return (
            <Route path={`/Conversations/${chatId}`} key={index}>
                <>
                    <div className="message_header blackdark">
                        <h5>Chat ID: {chatId}</h5>
                        <hr />
                    </div>
                    <div className="messages_wrapper">
                        {messages.map(({ sender, timestamp, message }, index) => {
                            return (
                                <div
                                    key={index}
                                    className={`message_box  ${
                                        sender === "agent" ? "agent" : "user"
                                    }`}
                                >
                                    <span className="sender">
                                        {sender.toUpperCase()} {sender === "agent" ? "" : userId}
                                    </span>
                                    <br />
                                    <div className="box">
                                        <p className="text">{message}</p>
                                        <span className="time">{timestamp}</span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </>
            </Route>
        );
    });

    // for Details
    var details = conversations.map((detail, index) => {
        return (
            <Route path={`/Conversations/${detail.chatId}`} key={index}>
                <LeadInfo props={{ detail }} />
            </Route>
        );
    });

    return (
        <div className="container-fluid conversations_main">
            <div className="header">
                <div className="header_tag">
                    <h3>Conversations</h3>
                </div>
            </div>

            <div className="container-fluid mt-3 blocks">
                <div className="row convo_grid">
                    <div className="chats blacklight shadow p-3 box">
                        <div className="r-c r-c-24">
                            <h4>Chats</h4>
                        </div>
                        <div className="chatList mt-3">
                            <ul>{chatList}</ul>
                        </div>
                    </div>
                    <div className="conversations blacklight shadow p-3 box">
                        <div className="r-c r-c-24">
                            <h4>Conversation</h4>
                        </div>
                        <div className="messages mt-3">
                            <div className="message_container blackdark">
                                <Switch>
                                    <Route path={"/Conversations"} exact>
                                        <Loader type={"Conversation"} />
                                    </Route>
                                    {messages}
                                </Switch>
                            </div>
                        </div>
                    </div>
                    <div className="info">
                        <Route path={"/Conversations"} exact>
                            <Loader type={"Lead Deatils"} height={"inline"} />
                        </Route>
                        {details}
                    </div>
                </div>
            </div>
        </div>
    );
}

function Loader({ type, height }) {
    return (
        <div className={`PreCon ${height === "inline" ? "inline" : ""}`}>
            <span className="spinner-grow spinner-grow"></span>
            <br />
            <p>Select a Chat to See {type}</p>
        </div>
    );
}

function LeadInfo({
    props: {
        detail: {
            chatId,
            lead: { leadType, leadSent, category },
            visitor: { name, phoneNumber, email, ipAddress, location },
        },
    },
}) {
    const [classifyDispute, setClassifyDispute] = useState(false);

    return (
        <>
            <div className="dispute p-3 blacklight shadow">
                <div className="details ">
                    <div className="r-c r-c-24">
                        <h4>Details</h4>
                    </div>
                    <div className="detail_box">
                        <p>
                            Lead Type: <span>{leadType}</span>
                        </p>
                        <p>
                            Lead Sent: <span>{leadSent}</span>
                        </p>
                        <p>
                            Category: <span>{category}</span>
                        </p>
                    </div>
                </div>
                <div className="visitor_info">
                    <div className="r-c r-c-24">
                        <h4>Visitor Info</h4>
                    </div>
                    <div className="visitor_box">
                        <p>
                            Visitor Name: <span>{name}</span>
                        </p>
                        <p>
                            Phone No: <span>{name}</span>
                        </p>
                        <p>
                            Visitor Name:
                            <span>{phoneNumber}</span>
                        </p>
                        <p>
                            Email: <span>{email}</span>
                        </p>
                        <p>
                            IP Address: <span>{ipAddress}</span>
                        </p>
                        <p>
                            Locations: <span>{location}</span>
                        </p>
                    </div>
                </div>
                <button
                    className="dispute_btn"
                    onClick={() => {
                        setClassifyDispute(!classifyDispute);
                    }}
                >
                    LEAD TYPE DIPUTE
                </button>
            </div>
            <ReClassifyDispute classifyDispute={classifyDispute} />
        </>
    );
}

function ReClassifyDispute({ classifyDispute }) {
    const [disputePayLoad, setDisputePayLoad] = useState({
        disputeTye: "",
        note: "",
    });
    const [disputeBtnDisable, setDisputeBtnDisable] = useState(true);
    useEffect(() => {
        if (disputePayLoad.disputeTye === "" || disputePayLoad.note === "") {
            setDisputeBtnDisable(true);
        } else {
            setDisputeBtnDisable(false);
        }
    }, [disputePayLoad.disputeTye, disputePayLoad.note]);

    function select({ key }) {
        setDisputePayLoad((prev) => {
            return { ...prev, disputeTye: key };
        });
    }
    const DisputeTypes = ["Visitor", "Live Chats", "Leads", "Sales", "Services", "Others"];

    const menu = (
        <Menu onSelect={select}>
            {DisputeTypes.map((type) => {
                return <MenuItem key={type}>{type}</MenuItem>;
            })}
        </Menu>
    );
    return (
        <CSSTransition in={classifyDispute} timeout={400} unmountOnExit classNames={"disputeTab"}>
            <div className={`classify blacklight p-3 shadow mt-3`}>
                <div className="r-c r-c-24">
                    <h4>Reclassify Lead</h4>
                </div>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                    }}
                >
                    <Dropdown
                        trigger={["click"]}
                        overlay={menu}
                        animation="slide-up"
                        closeOnSelect={false}
                    >
                        <div className="drop rounded blackdark px-3 py-2 my-2 d-flex justify-content-between">
                            <p className="m-0 leadType" style={{ cursor: "pointer" }}>
                                {disputePayLoad.disputeTye === ""
                                    ? "Select Dispute Type"
                                    : disputePayLoad.disputeTye}
                            </p>
                            <MdKeyboardArrowDown size="20px" />
                        </div>
                    </Dropdown>
                    <textarea
                        name="note"
                        className="note rounded mb-3 blackdark p-2 px-3"
                        placeholder="Note..."
                        required
                        onChange={(e) => {
                            setDisputePayLoad((prev) => {
                                return {
                                    ...prev,
                                    note: e.target.value,
                                };
                            });
                        }}
                    ></textarea>
                    <button
                        className={`dispute_btn ${disputeBtnDisable ? "disabled" : "enabled"}`}
                        type="submit"
                        disabled={disputeBtnDisable}
                    >
                        SUBMIT LEAD DISPUTE
                    </button>
                </form>
            </div>
        </CSSTransition>
    );
}

export default Conversations;
