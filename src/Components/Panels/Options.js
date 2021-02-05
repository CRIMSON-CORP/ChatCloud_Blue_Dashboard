import React, { useState, useEffect } from "react";
import { FiFacebook, FiInstagram, FiLinkedin, FiPlus } from "react-icons/fi";
import { MdCheck, MdDelete, MdEdit, MdError, MdKeyboardArrowDown } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import { IconContext } from "react-icons";
import "swiper/swiper-bundle.css";
import "swiper/components/navigation/navigation.min.css";
import SwiperCore, { Navigation } from "swiper";
import { TimelineLite } from "gsap";
import Dropdown from "rc-dropdown";
import Menu, { Item as MenuItem, Divider } from "rc-menu";
import "rc-dropdown/assets/index.css";
import { CSSTransition } from "react-transition-group";
import { v4 } from "uuid";
import { FaEllipsisH } from "react-icons/fa";

function Options({
    props: {
        apiData: {
            options: {
                connections,
                SocialConnections,
                optionSubSettings: { domainName, domainKey, widgetState },
            },
        },
    },
}) {
    const [SubFormState, setSubFormState] = useState({
        domainName: domainName,
        domainKey: domainKey,
        widgetState: widgetState,
    });
    const [AvailableCon, setAvailableCons] = useState([
        {
            id: 1,
            link: "",
            name: "Facebook",
            conStatus: false,
            icon: <FiFacebook />,
        },
        {
            id: 2,
            link: "",
            name: "Instagram",
            conStatus: false,
            icon: <FiInstagram />,
        },
        {
            id: 3,
            link: "",
            name: "Linkedin",
            conStatus: false,
            icon: <FiLinkedin />,
        },
    ]);

    useEffect(() => {
        var tl = new TimelineLite({ duration: 0.2 });
        tl.from(".header_tag h3", { y: 20, opacity: 0 })
            .from(".options .connect", {
                autoAlpha: 0,
                scale: 0.9,
                ease: "back.out(2)",
            })
            .from(".options .r-c", { x: -20, opacity: 0, stagger: { each: 0.2 } }, "-=.25")
            .from(
                ".swiper_card",
                {
                    opacity: 0,
                    scale: 0.9,
                    stagger: { each: 0.2 },
                    ease: "back.out(1.7)",
                },
                "-=.25"
            )
            .from(".input-box", { autoAlpha: 0, x: -30, stagger: { each: 0.2 } }, "-=.5")
            .from(".cta", { autoAlpha: 0, ease: "back.out(1.5)" })
            .from(".swiper-button-next, .swiper-button-prev", {
                opacity: 0,
                stagger: { each: 0.2 },
            });
    }, []);

    function submitOptions(e) {
        e.preventDefault();
        // eslint-disable-next-line no-unused-vars
        var payload = SubFormState;
        // fetch logic to submit and save settings to API
        return;
    }
    SwiperCore.use([Navigation]);

    function select({ key }) {
        setSubFormState((prev) => {
            return { ...prev, widgetState: key };
        });
    }

    const menu = (
        <Menu onSelect={select}>
            <MenuItem key="Enabled">Enabled</MenuItem>
            <Divider />
            <MenuItem key="Disabled">Disabled</MenuItem>
        </Menu>
    );

    const Cards = AvailableCon.map(({ id, link, name, conStatus, icon, color }) => {
        return (
            <SwiperSlide key={id}>
                <div className={`swiper_card blacklight shadow ${name}`}>
                    <div className="con_Status">
                        <span
                            className={`indicator ${conStatus ? "Connected" : "Disconnected"}`}
                        ></span>
                        {conStatus ? "Connected" : "Disconnected"}
                    </div>
                    <div className="actions">
                        <MdEdit size={15} />
                        <MdDelete
                            className="delete"
                            size={15}
                            onClick={() => {
                                setAvailableCons(
                                    AvailableCon.filter((con) => {
                                        return con.id !== id;
                                    })
                                );
                            }}
                        />
                    </div>
                    <div className="icon">{icon}</div>
                    <p className="con_tag">
                        {conStatus ? "Disconnect from " : "Connect to "}
                        {name}
                    </p>

                    <button
                        className={`con_btn ${conStatus ? "disconnect" : "connect"}`}
                        onClick={() => {
                            if (!conStatus) {
                                setAvailableCons(
                                    AvailableCon.map((con) => {
                                        if (con.id === id) con.conStatus = true;
                                        return con;
                                    })
                                );
                            } else {
                                setAvailableCons(
                                    AvailableCon.map((con) => {
                                        if (con.id === id) con.conStatus = false;
                                        return con;
                                    })
                                );
                            }
                        }}
                    >
                        {conStatus ? "Disconnect" : "Connect"}
                    </button>
                </div>
            </SwiperSlide>
        );
    });

    return (
        <div className="container-fluid options">
            <div className="header_tag">
                <h3>Options</h3>
            </div>
            <div className="container-fluid mt-3">
                <div className="row-grid">
                    <div className="connect">
                        <div className="row blacklight p-3">
                            <div className="r-c r-c-16">
                                <h5>Connect Pages</h5>
                            </div>
                            <div className="slider-row mt-3 ">
                                <div className="slider blackdark">
                                    {/* Not sure if these Connections should be rendered dynamicaly or static */}
                                    <IconContext.Provider value={{ size: 60 }}>
                                        <Swiper slidesPerView={"auto"} navigation>
                                            {Cards}
                                            <SwiperSlide>
                                                <AddLink props={{ setAvailableCons }} />
                                            </SwiperSlide>
                                        </Swiper>
                                    </IconContext.Provider>
                                </div>
                            </div>

                            <form onSubmit={submitOptions}>
                                <div className="row mt-4 form_grid">
                                    <div className="">
                                        <div className="r-c r-c-16">
                                            <h5>Domain Settings</h5>
                                        </div>
                                        <div className="my-3 ml-2 input-box">
                                            <h5 className="tag">Domain name</h5>
                                            <input
                                                type="text"
                                                name="domainName"
                                                className="px-3"
                                                placeholder={SubFormState.domainName}
                                                onChange={(e) => {
                                                    setSubFormState((prev) => {
                                                        return {
                                                            ...prev,
                                                            [e.targte.name]: e.target.value,
                                                        };
                                                    });
                                                }}
                                            />
                                        </div>
                                        <div className="my-3 ml-2 input-box">
                                            <h5 className="tag">Domain key</h5>
                                            <input
                                                type="text"
                                                name="domainKey"
                                                className="px-3"
                                                placeholder={SubFormState.domainKey}
                                                onChange={(e) => {
                                                    setSubFormState((prev) => {
                                                        return {
                                                            ...prev,
                                                            [e.targte.name]: e.target.value,
                                                        };
                                                    });
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="r-c r-c-16">
                                            <h5>Widget Options</h5>
                                        </div>
                                        <div className="my-3 ml-2 input-box">
                                            <h5 className="tag">Enable/Disable Widget</h5>
                                            <Dropdown
                                                trigger={["click"]}
                                                overlay={menu}
                                                animation="slide-up"
                                                closeOnSelect={false}
                                            >
                                                <div className="drop blackdark px-3">
                                                    <input
                                                        type="text"
                                                        readOnly
                                                        style={{ cursor: "pointer" }}
                                                        value={SubFormState.widgetState}
                                                    />
                                                    <MdKeyboardArrowDown size="20px" />
                                                </div>
                                            </Dropdown>
                                        </div>
                                        <div className="cta ">
                                            <button type="submit">
                                                <span>Save</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Options;

function AddLink({ props: { setAvailableCons } }) {
    const [input, setInputVal] = useState({
        name: "",
        link: "",
    });
    const [AddLinkState, setAddLinkState] = useState({
        AddPage: true,
        form: false,
        loading: false,
        feedBack: {
            state: false,
            feedback: false,
        },
    });

    function setInput({ target: { name, value } }) {
        setInputVal((prev) => {
            return { ...prev, [name]: value };
        });
    }

    function connectLink(e) {
        e.preventDefault();
        setAddLinkState((prev) => {
            return { ...prev, form: false, loading: true };
        });
        // Send request to API
        // assuming success fedback
        setAddLinkState((prev) => {
            return { ...prev, loading: false, feedBack: { state: true, feedback: true } };
        });

        var newLink = {
            id: v4(),
            link: input.link,
            name: input.name,
            icon: <FaEllipsisH />,
        };

        setAvailableCons((prev) => {
            return [...prev, newLink];
        });

        setTimeout(() => {
            setAddLinkState((prev) => {
                return { ...prev, feedBack: { ...prev.feedBack, state: false }, AddPage: true };
            });
        }, 2000);
    }
    return (
        <div className="swiper_card blacklight shadow addLinkCard">
            <CSSTransition
                in={AddLinkState.AddPage}
                classNames="conSlider"
                timeout={0}
                unmountOnExit
            >
                <div className="AddLink con d-flex flex-column align-items-center">
                    <FiPlus
                        style={{
                            strokeLinecap: "square",
                            strokeWidth: 1,
                        }}
                    />
                    <button
                        className="addLink"
                        onClick={() => {
                            setAddLinkState((prev) => {
                                return { ...prev, form: true, AddPage: false };
                            });
                        }}
                    >
                        <span className="mt-3">Add new Link</span>
                    </button>
                </div>
            </CSSTransition>
            <CSSTransition
                in={AddLinkState.form}
                classNames="conSlider"
                timeout={400}
                unmountOnExit
            >
                <form className="con" onSubmit={connectLink}>
                    <label>
                        <p className="tag">Name</p>
                        <input type="text" name="name" required onChange={setInput} />
                    </label>
                    <label>
                        <p className="tag">Link</p>
                        <input type="text" required name="link" onChange={setInput} />
                    </label>
                    <button className="submit" type="submit">
                        Connect
                    </button>
                </form>
            </CSSTransition>
            <CSSTransition
                in={AddLinkState.loading}
                classNames="conSlider"
                timeout={400}
                unmountOnExit
            >
                <div className="cardLoading text-center con">
                    <span className="spinner-grow spinner-grow"></span>
                    <p>Connecting...</p>
                </div>
            </CSSTransition>
            <CSSTransition
                in={AddLinkState.loading}
                classNames="conSlider"
                timeout={400}
                unmountOnExit
            >
                <div className="cardLoading text-center con">
                    <span className="spinner-grow spinner-grow"></span>
                    <p>Connecting...</p>
                </div>
            </CSSTransition>
            <CSSTransition
                in={AddLinkState.feedBack.state}
                classNames="conSlider"
                timeout={400}
                unmountOnExit
            >
                <div className="text-center con text-center d-flex flex-column align-items-center">
                    {AddLinkState.feedBack.feedback ? (
                        <>
                            <MdCheck />
                            <p> Connected!</p>
                        </>
                    ) : (
                        <>
                            <MdError />
                            <p>Failed to Connected!</p>
                        </>
                    )}
                </div>
            </CSSTransition>
        </div>
    );
}
