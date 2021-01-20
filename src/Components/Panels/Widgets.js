import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import OnOutsideClick from "react-outclick";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TimelineLite } from "gsap";
function Widgets({
    props: {
        apiData: {
            widgets: {
                agentName,
                themeColor,
                agentProfilePicURL,
                messagesFontSize,
                timestampFontSize,
                messagesPadding,
                widgetPos,
            },
        },
    },
}) {
    const [themeColorState, setThemeColorState] = useState(themeColor);
    const [posDrop, setPosDrop] = useState(false);
    const [currentPos, setCurrentPos] = useState(widgetPos);
    const [positions] = useState(["Top-left", "Top-right", "Bottom-left", "Bottom-right"]);
    const [FormData, setFormData] = useState({
        agentName: agentName,
        themeColor: themeColor,
        messagesFontSize: parseInt(messagesFontSize),
        timestampFontSize: parseInt(timestampFontSize),
        mesagesPadding: parseInt(messagesPadding),
        widgetPos: currentPos,
        // Dont Forget to Add  Profile image URL Steve
    });
    const [Tooltip, setTooltip] = useState(false);

    useEffect(() => {
        var tl = new TimelineLite({ duration: 0.25 });
        tl.from(".header_tag h3", { y: 20, opacity: 0 });
        tl.from("form .row-grid div", { opacity: 0, stagger: { each: 0.1 } });
    }, []);

    const posList = positions.map((position, index) => {
        return (
            <li
                key={index}
                className="list-group-item p-2"
                onClick={() => {
                    setCurrentPos(position);
                    setPosDrop(false);
                }}
            >
                {position}
            </li>
        );
    });

    function setData({ target: { name, value } }) {
        setFormData((prev) => {
            return { ...prev, [name]: value };
        });
    }

    function submit(e) {
        e.preventDefault();
        // Put file in Db and get Download URL
        // eslint-disable-next-line no-unused-vars
        var payload = {
            agentName: FormData.agentName,
            themeColor: FormData.themeColor,
            messagesFontSize: parseInt(FormData.messagesFontSize),
            timestampFontSize: parseInt(FormData.timestampFontSize),
            mesagesPadding: parseInt(FormData.mesagesPadding),
            widgetPos: currentPos,
        };
        // ^^ set Download URL in Payload object
        // send payload to API
    }
    return (
        <div className="container-fluid">
            <div className="header_tag">
                <h3>Widgets Settings</h3>
            </div>
            <form className="row mt-4 widget" onSubmit={submit}>
                <div className="row-grid p-0">
                    <InputBoxGen
                        props={{
                            header: "Agent Name",
                            type: "text",
                            name: "agentName",
                            placeholder: agentName,
                            change: setData,
                        }}
                    />
                    <div>
                        <h5>Agent Profile Picture</h5>
                        <label className="spec">
                            <input type="file" name="agentName" id="agentName" onChange={setData} />
                            <span>Choose File</span>
                        </label>
                    </div>
                    <div>
                        <h5>Theme Color</h5>
                        <label
                            className="spec"
                            onMouseEnter={async () => {
                                setTooltip(true);
                            }}
                            onMouseOut={() => {
                                setTooltip(false);
                            }}
                        >
                            <span className={`tooltip ${Tooltip ? "show" : ""}`}>
                                Click Here to Change Theme Color
                            </span>
                            <input type="text" value={themeColorState} readOnly={true} />
                            <input
                                type="color"
                                name="themeColor"
                                defaultValue={themeColor}
                                onChange={(e) => {
                                    setThemeColorState(e.target.value);
                                    setData(e);
                                }}
                            />
                        </label>
                    </div>
                    <InputBoxGen
                        props={{
                            header: "Messages Font Size",
                            type: "text",
                            name: "messagesFontSize",
                            placeholder: messagesFontSize,
                            change: setData,
                        }}
                    />
                </div>
                <div className="row-grid p-0">
                    <InputBoxGen
                        props={{
                            header: "Time-Stamp Font-Size",
                            type: "text",
                            name: "timestampFontSize",
                            placeholder: timestampFontSize,
                            change: setData,
                        }}
                    />
                    <InputBoxGen
                        props={{
                            header: "Messages Padding",
                            type: "text",
                            name: "mesagesPadding",
                            placeholder: messagesPadding,
                            change: setData,
                        }}
                    />
                    <div>
                        <h5>Widget Positions</h5>
                        <OnOutsideClick
                            onOutsideClick={() => {
                                setPosDrop(false);
                            }}
                        >
                            <div className={`posDrop blacklight ${posDrop ? "drop" : ""}`}>
                                <div
                                    className="d-flex  align-items-start pos-box dropDown"
                                    onClick={() => {
                                        setPosDrop(!posDrop);
                                    }}
                                >
                                    {currentPos}
                                    <span>
                                        <MdKeyboardArrowDown size="1.4rem" />
                                    </span>
                                </div>
                                <CSSTransition
                                    in={posDrop}
                                    timeout={400}
                                    classNames="drop"
                                    unmountOnExit
                                >
                                    <div className="card drop-down shadow rounded-0">
                                        <div className="card-body">
                                            <ul className="list-group">{posList}</ul>
                                        </div>
                                    </div>
                                </CSSTransition>
                            </div>
                        </OnOutsideClick>
                    </div>
                    <div className="cta">
                        <input
                            className="reset shadow"
                            type="reset"
                            value="Reset"
                            onClick={() => {
                                setThemeColorState(themeColor);
                                setCurrentPos(widgetPos);
                            }}
                        />
                        <input className="submit shadow" type="submit" value="Save" />
                    </div>
                </div>
            </form>
        </div>
    );
}

function InputBoxGen({ props: { header, type, name, placeholder, change } }) {
    return (
        <div>
            <h5>{header}</h5>
            <input type={type} name={name} placeholder={placeholder} onChange={change} />
        </div>
    );
}

export default Widgets;
