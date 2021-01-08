import React, { useState } from "react";

function Options(props) {
    console.log(props.props.apiData.queries);

    return (
        <div className="container-fluid options">
            <div className="header_tag">
                <h3>Options</h3>
                <div className="container-fluid mt-3">
                    <div className="row-grid">
                        <div className="p-4 blacklight queries ">
                            <div className="r-c r-c-16">
                                <span className="rect"></span>
                                <h5>Queries</h5>
                            </div>
                            <div className="row">
                                <div className="blackdark p-2 mt-3"></div>
                            </div>
                        </div>
                        <div className="blacklight p-4 connect  ">
                            <div className="r-c r-c-16">
                                <span className="rect"></span>
                                <h5>Connect Pages</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Options;
