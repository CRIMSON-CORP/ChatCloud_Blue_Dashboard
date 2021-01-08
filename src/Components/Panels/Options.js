import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState,
} from "react-accessible-accordion";

function Options({
    props: {
        apiData: { queries },
    },
}) {
    var Queries = queries.map((query, index) => {
        return <AccordionItem></AccordionItem>;
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

                                    <div className="row mt-3">
                                        <div className="accordion">
                                            <Accordion></Accordion>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="blacklight p-3 connect  ">
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
