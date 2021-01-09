import React, { useState } from "react";
import { FiSearch, FiEdit, FiMinus, FiFacebook, FiInstagram, FiLinkedin } from "react-icons/fi";
import { BiCaretDown } from "react-icons/bi";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState,
} from "react-accessible-accordion";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import "swiper/swiper-bundle.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

function Options({
    props: {
        apiData: { queries },
    },
}) {
    const [editState, setEditState] = useState(false);
    const [deleteState, setDeleteState] = useState(false);
    const [query_to_edit, setQuerytoEdit] = useState({});
    const [query_to_delete, setQuerytoDelete] = useState({});
    const [connections, setConnection] = useState({
        facebook: true,
        instagram: false,
        linkedin: false,
    });

    function editQuery({ text, id }) {
        if (!text) return;
        // Call Api to Edit query with the Id in parameter
        setEditState(false);
        return;
    }
    function DeleteQuery(id) {
        if (!id) return;
        // Call Api to Delete query with the Id in parameter
        setEditState(false);
        return;
    }

    var Queries = queries.map((query, index) => {
        return (
            <AccordionItem key={index}>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        <AccordionItemState>
                            {({ expanded }) => {
                                return (
                                    <p className="query_header blacklight mb-2 p-2">
                                        <BiCaretDown
                                            className={`mr-1 caret ${expanded ? "ex" : "clp"}`}
                                        />
                                        {query.label}
                                    </p>
                                );
                            }}
                        </AccordionItemState>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    {query.content.map(({ text, id }, index) => {
                        return (
                            <div className="blacklight my-1 p-2 string" key={index}>
                                <p>{text}</p>
                                <FiEdit
                                    onClick={() => {
                                        setEditState(true);
                                        setQuerytoEdit({ text, id });
                                    }}
                                />
                                <FiMinus
                                    onClick={() => {
                                        setDeleteState(true);
                                        setQuerytoDelete({ text, id });
                                    }}
                                />
                            </div>
                        );
                    })}
                </AccordionItemPanel>
            </AccordionItem>
        );
    });

    return (
        <div className="container-fluid options">
            <div className="header_tag">
                <h3>Options</h3>
                <div className="container-fluid mt-3">
                    <div className="row-grid">
                        <div className="p-3 blacklight queries ">
                            <div className="r-c r-c-16">
                                <span className="rect"></span>
                                <h5>Queries</h5>
                            </div>
                            <div className="row">
                                <div className="blackdark p-2 mt-3">
                                    <div className="search">
                                        <div className="searchbar blacklight">
                                            <div className="searchBarConatiner">
                                                <span className="searchIcon">
                                                    <FiSearch color="white" size="16px" />
                                                </span>
                                                <input
                                                    type="text"
                                                    name="search"
                                                    id="search"
                                                    placeholder="Search Queries"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    {editState && (
                                        <div className="search edit mt-3">
                                            <div className="searchbar blacklight p-2">
                                                <p className="tag">Edit Query</p>
                                                <div className="searchBarConatiner">
                                                    <form>
                                                        <input
                                                            type="text"
                                                            name="edit"
                                                            id="search"
                                                            className="mb-2"
                                                            placeholder={query_to_edit.text}
                                                        />
                                                        <div className="action">
                                                            <input
                                                                type="button"
                                                                value="Cancel"
                                                                onClick={() => {
                                                                    setEditState(false);
                                                                }}
                                                            />
                                                            <input
                                                                type="submit"
                                                                value="Edit"
                                                                onClick={() => {
                                                                    setEditState(false);
                                                                    editQuery(query_to_edit);
                                                                }}
                                                            />
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                    {deleteState && (
                                        <div className="Delete blacklight mt-3 p-2">
                                            <p className="tag">Delete Query?</p>
                                            <p className="italic my-2 query_text">
                                                {query_to_delete.text}
                                            </p>
                                            <div className="action">
                                                <input
                                                    type="button"
                                                    value="No"
                                                    className="blackdark"
                                                    onClick={() => {
                                                        setDeleteState(false);
                                                    }}
                                                />
                                                <input
                                                    type="submit"
                                                    value="Yes"
                                                    className="del"
                                                    onClick={() => {
                                                        setDeleteState(false);
                                                        DeleteQuery(query_to_delete.id);
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    )}

                                    <div className="row mt-4">
                                        <div className="accordion">
                                            <Accordion
                                                allowZeroExpanded={true}
                                                allowMultipleExpanded={true}
                                            >
                                                {Queries}
                                            </Accordion>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="connect">
                            <div className="row blacklight p-3">
                                <div className="r-c r-c-16">
                                    <span className="rect"></span>
                                    <h5>Connect Pages</h5>
                                </div>

                                <div className="slider-row mt-3 ">
                                    <div className="slider px-4 blackdark">
                                        {/* Not sure if these Connections should be rendered dynamicaly or static */}
                                        <Swiper slidesPerView={2} spaceBetween={30} navigation>
                                            <SwiperSlide>
                                                <div className="swiper_card facebook blacklight">
                                                    <div className="con_Status">
                                                        <span
                                                            className={`indicator ${
                                                                connections.facebook
                                                                    ? "Connected"
                                                                    : "Disconnected"
                                                            }`}
                                                        ></span>
                                                        {connections.facebook
                                                            ? "Connected"
                                                            : "Disconnected"}
                                                    </div>
                                                    <FiFacebook
                                                        color="#3B5998"
                                                        fill="#3B5998"
                                                        strokeWidth="0px"
                                                        size="60px"
                                                    />
                                                    <p className="con_tag">
                                                        {connections.facebook
                                                            ? "Disconnect"
                                                            : "Connect"}{" "}
                                                        from Facebook
                                                    </p>
                                                    {connections.facebook ? (
                                                        <button
                                                            className="con_btn disconnect"
                                                            onClick={() => {
                                                                setConnection((prev) => {
                                                                    return {
                                                                        ...prev,
                                                                        facebook: false,
                                                                    };
                                                                });
                                                            }}
                                                        >
                                                            Disconnect
                                                        </button>
                                                    ) : (
                                                        <button
                                                            className="con_btn connect"
                                                            onClick={() => {
                                                                setConnection((prev) => {
                                                                    return {
                                                                        ...prev,
                                                                        facebook: true,
                                                                    };
                                                                });
                                                            }}
                                                        >
                                                            Connect
                                                        </button>
                                                    )}
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="swiper_card instagram blacklight">
                                                    <div className="con_Status">
                                                        <span
                                                            className={`indicator ${
                                                                connections.instagram
                                                                    ? "Connected"
                                                                    : "Disconnected"
                                                            }`}
                                                        ></span>
                                                        {connections.instagram
                                                            ? "Connected"
                                                            : "Disconnected"}
                                                    </div>
                                                    <FiInstagram color="#E4405F" size="60px" />
                                                    <p className="con_tag">
                                                        {connections.instagram
                                                            ? "Disconnect"
                                                            : "Connect"}{" "}
                                                        from Instagram
                                                    </p>
                                                    {connections.instagram ? (
                                                        <button
                                                            className="con_btn disconnect"
                                                            onClick={() => {
                                                                setConnection((prev) => {
                                                                    return {
                                                                        ...prev,
                                                                        instagram: false,
                                                                    };
                                                                });
                                                            }}
                                                        >
                                                            Disconnect
                                                        </button>
                                                    ) : (
                                                        <button
                                                            className="con_btn connect"
                                                            onClick={() => {
                                                                setConnection((prev) => {
                                                                    return {
                                                                        ...prev,
                                                                        instagram: true,
                                                                    };
                                                                });
                                                            }}
                                                        >
                                                            Connect
                                                        </button>
                                                    )}
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="swiper_card linkedin blacklight">
                                                    <div className="con_Status">
                                                        <span
                                                            className={`indicator ${
                                                                connections.linkedin
                                                                    ? "Connected"
                                                                    : "Disconnected"
                                                            }`}
                                                        ></span>
                                                        {connections.linkedin
                                                            ? "Connected"
                                                            : "Disconnected"}
                                                    </div>
                                                    <FiLinkedin
                                                        fill="#0E76A8"
                                                        size="60px"
                                                        strokeWidth={0}
                                                    />
                                                    <p className="con_tag">
                                                        {connections.linkedin
                                                            ? "Disconnect"
                                                            : "Connect"}{" "}
                                                        from Linkedin
                                                    </p>
                                                    {connections.linkedin ? (
                                                        <button
                                                            className="con_btn disconnect"
                                                            onClick={() => {
                                                                setConnection((prev) => {
                                                                    return {
                                                                        ...prev,
                                                                        linkedin: false,
                                                                    };
                                                                });
                                                            }}
                                                        >
                                                            Disconnect
                                                        </button>
                                                    ) : (
                                                        <button
                                                            className="con_btn connect"
                                                            onClick={() => {
                                                                setConnection((prev) => {
                                                                    return {
                                                                        ...prev,
                                                                        linkedin: true,
                                                                    };
                                                                });
                                                            }}
                                                        >
                                                            Connect
                                                        </button>
                                                    )}
                                                </div>
                                            </SwiperSlide>
                                        </Swiper>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Options;
