import React, { useState, useEffect } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TimelineLite } from "gsap";
import Dropdown from "rc-dropdown";
import Menu, { Item as MenuItem, Divider } from "rc-menu";
function Widgets({ props: { apiData: widgets } }) {
    const Default = widgets.widgets;

    const [FormData, setFormData] = useState({
        agentName: Default.agentName,
        themeColor: Default.themeColor,
        messagesFontSize: parseInt(Default.messagesFontSize),
        timestampFontSize: parseInt(Default.timestampFontSize),
        messagesPadding: parseInt(Default.messagesPadding),
        widgetPos: Default.widgetPos,
        // Dont Forget to Add  Profile image URL Steve
    });
    const [Tooltip, setTooltip] = useState(false);
    useEffect(() => {
        var tl = new TimelineLite({ duration: 0.25 });
        tl.from(".header_tag h3", { y: 20, opacity: 0 });
        tl.from("form .row-grid div", {
            autoAlpha: 0,
            scale: 0.8,
            ease: "back.out(1.5)",
            stagger: { each: 0.125 },
        });
    }, []);

    function setData({ target: { name, value } }) {
        setFormData((prev) => {
            return { ...prev, [name]: value };
        });
    }

    function submit(e) {
        e.preventDefault();
        // Put file in Db and get Download URL
        // eslint-disable-next-line no-unused-vars
        var payload = FormData;
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
                            placeholder: FormData.agentName,
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
                            <input type="text" value={FormData.themeColor} readOnly={true} />
                            <input
                                type="color"
                                name="themeColor"
                                defaultValue={FormData.themeColor}
                                onChange={(e) => {
                                    setFormData((prev) => {
                                        return { ...prev, themeColor: e.target.value };
                                    });
                                }}
                            />
                        </label>
                    </div>
                    <InputBoxGen
                        props={{
                            header: "Messages Font Size",
                            type: "number",
                            name: "messagesFontSize",
                            placeholder: FormData.messagesFontSize,
                            change: setData,
                        }}
                    />
                </div>
                <div className="row-grid p-0">
                    <InputBoxGen
                        props={{
                            header: "Time-Stamp Font-Size",
                            type: "number",
                            name: "timestampFontSize",
                            placeholder: FormData.timestampFontSize,
                            change: setData,
                        }}
                    />
                    <InputBoxGen
                        props={{
                            header: "Messages Padding",
                            type: "number",
                            name: "mesagesPadding",
                            placeholder: FormData.messagesPadding,
                            change: setData,
                        }}
                    />
                    <WidgetSetting props={{ widgetPos: FormData.widgetPos, setFormData }} />
                    <div className="cta">
                        <input
                            className="reset"
                            type="reset"
                            value="Reset"
                            onClick={() => {
                                setFormData(Default);
                            }}
                        />
                        <input className="submit" type="submit" value="Save" />
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

function WidgetSetting({ props: { widgetPos, setFormData } }) {
    const Positions = ["Top-left", "Top-right", "Bottom-left", "Bottom-right"];
    function select({ key }) {
        setFormData((prev) => {
            return { ...prev, widgetPos: key };
        });
    }
    const menu = (
        <Menu onSelect={select}>
            {Positions.map((type) => {
                return (
                    <>
                        <MenuItem key={type}>{type}</MenuItem>
                        <Divider />
                    </>
                );
            })}
        </Menu>
    );

    return (
        <div>
            <h5>Widget Positions</h5>
            <Dropdown trigger={["click"]} overlay={menu} animation="slide-up" closeOnSelect={false}>
                <div
                    className="posDrop blacklight  px-3 py-2 my-2 d-flex flex-row justify-content-between"
                    style={{ cursor: "pointer" }}
                >
                    <p className="m-0 leadType d-inline-block">{widgetPos}</p>
                    <MdKeyboardArrowDown size="20px" />
                </div>
            </Dropdown>
        </div>
    );
}

export default Widgets;
