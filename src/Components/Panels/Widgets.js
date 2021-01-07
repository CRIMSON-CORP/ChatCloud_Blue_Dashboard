import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import OnOutsideClick from "react-outclick";
import { MdKeyboardArrowDown } from "react-icons/md";

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
    const [FormData, setFormData] = useState({});
    const [Tooltip, setTooltip] = useState(false);

    const posList = positions.map((position, index) => {
        return (
            <li
                key={index}
                className="list-group-item p-2"
                onClick={() => {
                    setCurrentPos(position);
                    setPosDrop(true);
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
                <span className="rect"></span> <h3>Widgets Settings</h3>
            </div>

            <form className="row mt-4 widget" onSubmit={submit}>
                <div className="row-grid col-6 p-0 pr-5">
                    <div>
                        <h5>Agent Name</h5>
                        <input
                            type="text"
                            name="agentName"
                            placeholder={agentName}
                            onChange={setData}
                        />
                    </div>
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
                            onMouseEnter={() => {
                                setTooltip(true);
                                setTimeout(() => {
                                    setTooltip(false);
                                }, 2000);
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
                                onBlur={(e) => {
                                    setThemeColorState(e.target.value);
                                    setData(e);
                                }}
                            />
                        </label>
                    </div>
                    <div>
                        <h5>Messages Font Size</h5>
                        <input
                            type="text"
                            name="messagesFontSize"
                            placeholder={messagesFontSize}
                            onChange={setData}
                        />
                    </div>
                </div>
                <div className="row-grid col-6 p-0 pl-5">
                    <div>
                        <h5>Time-Stamp Font-Size</h5>
                        <input
                            type="text"
                            name="timestampFontSize"
                            placeholder={timestampFontSize}
                            onChange={setData}
                        />
                    </div>
                    <div>
                        <h5>Messages Padding</h5>
                        <input
                            type="text"
                            name="mesagesPadding"
                            placeholder={messagesPadding}
                            onChange={setData}
                        />
                    </div>
                    <div>
                        <h5>Widget Positions</h5>
                        <OnOutsideClick
                            onOutsideClick={() => {
                                setPosDrop(false);
                            }}
                        >
                            <div className={`posDrop blacklight ${posDrop ? "drop" : ""}`}>
                                <div
                                    className="d-flex justify-content-lg-between align-items-center pos-box dropDown"
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
                            className="reset"
                            type="reset"
                            value="Reset"
                            onClick={() => {
                                setThemeColorState(themeColor);
                            }}
                        />
                        <input className="submit" type="submit" value="Save" />
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Widgets;
