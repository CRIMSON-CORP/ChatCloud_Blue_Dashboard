import React from "react";

function Widgets({
    props: {
        apiData: {
            widgets: {
                agetName,
                themeColor,
                messagesFontSize: mfs,
                timestampFontSize: tfs,
                mesagesPadding,
                widgetPos,
            },
        },
    },
}) {
    return (
        <div className="container-fluid">
            <div className="header_tag">
                <span className="rect"></span> <h3>Widgets Settings</h3>
            </div>

            <form className="row mt-4 widget">
                <div className="row-grid col-6 p-0 pr-5">
                    <div>
                        <h5>Agent Name</h5>
                        <input type="text" name="agentName" id="agentName" placeholder={agetName} />
                    </div>
                    <div>
                        <h5>Agent Profile Picture</h5>
                        <input type="file" name="agentName" id="agentName" />
                    </div>
                    <div>
                        <h5>Theme Color</h5>
                        <input
                            type="text"
                            name="themeColor"
                            id="agentName"
                            placeholder={themeColor}
                        />
                    </div>
                    <div>
                        <h5>Messages Font Size</h5>
                        <input type="text" name="mfs" id="mfs" placeholder={mfs} />
                    </div>
                </div>
                <div className="row-grid col-6 p-0 pl-5">
                    <div>
                        <h5>Time-Stamp Font-Size</h5>
                        <input type="text" name="tfs" id="tfs" placeholder={tfs} />
                    </div>
                    <div>
                        <h5>Messages Padding</h5>
                        <input
                            type="text"
                            name="msgPadding"
                            id="msgPadding"
                            placeholder={mesagesPadding}
                        />
                    </div>
                    <div>
                        <h5>Widget Positions</h5>
                        <input
                            type="text"
                            name="themeColor"
                            id="agentName"
                            placeholder={widgetPos}
                        />
                    </div>
                    <div className="cta">
                        <input className="reset" type="reset" value="Reset" />
                        <input className="submit" type="submit" value="Save" />
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Widgets;
