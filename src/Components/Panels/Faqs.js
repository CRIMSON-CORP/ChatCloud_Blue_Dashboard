import React, { useState } from "react";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState,
} from "react-accessible-accordion";
import { FiArrowDown } from "react-icons/fi";
import { IconContext } from "react-icons";
function Faqs() {
    const [accordions, setAccordions] = useState({});
    return (
        <div className="container-fluid faqs">
            <div className="row-grid">
                <div className="faq_inner">
                    <div className="r-c r-c-24">
                        <span className="rect"></span>
                        <h4>Frequently Asked Questions</h4>
                    </div>
                    <div className="accordion mt-4">
                        <Accordion allowZeroExpanded={true} allowMultipleExpanded={true}>
                            <IconContext.Provider value={{ color: " #ed1c24", size: "1.5rem" }}>
                                <AccordionItem>
                                    <AccordionItemHeading>
                                        <AccordionItemState>
                                            {({ expanded }) => {
                                                return (
                                                    <AccordionItemButton
                                                        className={`accordion__button ${
                                                            expanded ? "expanded" : "collapsed"
                                                        }`}
                                                    >
                                                        <h5>
                                                            Lorem ipsum dolor sit amet, consectetur
                                                        </h5>
                                                        <FiArrowDown />
                                                    </AccordionItemButton>
                                                );
                                            }}
                                        </AccordionItemState>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p>
                                            Lorem ipsum dolor sit, amet consectetur adipisicing
                                            elit. Eligendi odit est esse quisquam eveniet magnam
                                            reprehenderit nihil placeat quos animi?
                                        </p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                                <AccordionItem>
                                    <AccordionItemHeading>
                                        <AccordionItemState>
                                            {({ expanded }) => {
                                                return (
                                                    <AccordionItemButton
                                                        className={`accordion__button ${
                                                            expanded ? "expanded" : "collapsed"
                                                        }`}
                                                    >
                                                        <h5>
                                                            Lorem ipsum dolor sit amet, consectetur
                                                        </h5>
                                                        <FiArrowDown />
                                                    </AccordionItemButton>
                                                );
                                            }}
                                        </AccordionItemState>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p>
                                            Lorem ipsum dolor sit, amet consectetur adipisicing
                                            elit. Eligendi odit est esse quisquam eveniet magnam
                                            reprehenderit nihil placeat quos animi?
                                        </p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                                <AccordionItem>
                                    <AccordionItemHeading>
                                        <AccordionItemState>
                                            {({ expanded }) => {
                                                return (
                                                    <AccordionItemButton
                                                        className={`accordion__button ${
                                                            expanded ? "expanded" : "collapsed"
                                                        }`}
                                                    >
                                                        <h5>
                                                            Lorem ipsum dolor sit amet, consectetur
                                                        </h5>
                                                        <FiArrowDown />
                                                    </AccordionItemButton>
                                                );
                                            }}
                                        </AccordionItemState>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p>
                                            Lorem ipsum dolor sit, amet consectetur adipisicing
                                            elit. Eligendi odit est esse quisquam eveniet magnam
                                            reprehenderit nihil placeat quos animi?
                                        </p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                                <AccordionItem>
                                    <AccordionItemHeading>
                                        <AccordionItemState>
                                            {({ expanded }) => {
                                                return (
                                                    <AccordionItemButton
                                                        className={`accordion__button ${
                                                            expanded ? "expanded" : "collapsed"
                                                        }`}
                                                    >
                                                        <h5>
                                                            Lorem ipsum dolor sit amet, consectetur
                                                        </h5>
                                                        <FiArrowDown />
                                                    </AccordionItemButton>
                                                );
                                            }}
                                        </AccordionItemState>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p>
                                            Lorem ipsum dolor sit, amet consectetur adipisicing
                                            elit. Eligendi odit est esse quisquam eveniet magnam
                                            reprehenderit nihil placeat quos animi?
                                        </p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                                <AccordionItem>
                                    <AccordionItemHeading>
                                        <AccordionItemState>
                                            {({ expanded }) => {
                                                return (
                                                    <AccordionItemButton
                                                        className={`accordion__button ${
                                                            expanded ? "expanded" : "collapsed"
                                                        }`}
                                                    >
                                                        <h5>
                                                            Lorem ipsum dolor sit amet, consectetur
                                                        </h5>
                                                        <FiArrowDown />
                                                    </AccordionItemButton>
                                                );
                                            }}
                                        </AccordionItemState>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p>
                                            Lorem ipsum dolor sit, amet consectetur adipisicing
                                            elit. Eligendi odit est esse quisquam eveniet magnam
                                            reprehenderit nihil placeat quos animi?
                                        </p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                                <AccordionItem>
                                    <AccordionItemHeading>
                                        <AccordionItemState>
                                            {({ expanded }) => {
                                                return (
                                                    <AccordionItemButton
                                                        className={`accordion__button ${
                                                            expanded ? "expanded" : "collapsed"
                                                        }`}
                                                    >
                                                        <h5>
                                                            Lorem ipsum dolor sit amet, consectetur
                                                        </h5>
                                                        <FiArrowDown />
                                                    </AccordionItemButton>
                                                );
                                            }}
                                        </AccordionItemState>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p>
                                            Lorem ipsum dolor sit, amet consectetur adipisicing
                                            elit. Eligendi odit est esse quisquam eveniet magnam
                                            reprehenderit nihil placeat quos animi?
                                        </p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                                <AccordionItem>
                                    <AccordionItemHeading>
                                        <AccordionItemState>
                                            {({ expanded }) => {
                                                return (
                                                    <AccordionItemButton
                                                        className={`accordion__button ${
                                                            expanded ? "expanded" : "collapsed"
                                                        }`}
                                                    >
                                                        <h5>
                                                            Lorem ipsum dolor sit amet, consectetur
                                                        </h5>
                                                        <FiArrowDown />
                                                    </AccordionItemButton>
                                                );
                                            }}
                                        </AccordionItemState>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p>
                                            Lorem ipsum dolor sit, amet consectetur adipisicing
                                            elit. Eligendi odit est esse quisquam eveniet magnam
                                            reprehenderit nihil placeat quos animi?
                                        </p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                            </IconContext.Provider>
                        </Accordion>
                    </div>
                </div>
                <div className="guidelines">
                    <div className="r-c r-c-24">
                        <span className="rect"></span>
                        <h4>Guidelines</h4>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Faqs;
