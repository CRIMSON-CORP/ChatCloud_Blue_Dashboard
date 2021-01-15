import React, { useEffect } from "react";
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
import { TimelineLite } from "gsap";
function Faqs() {
    useEffect(() => {
        var tl = new TimelineLite({ duration: 0.25 });
        tl.from(".r-c", { x: -20, opacity: 0, stagger: { each: 0.5 } }, "-=.2");
        tl.from(
            ".accordion__heading",
            { opacity: 0, scale: 0.9, stagger: { each: 0.2 }, ease: "back.out(1.7)" },
            "-=.2"
        );
        tl.from(".guideline-list", { opacity: 0 }, "-=1");
    }, []);
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
                            </IconContext.Provider>
                        </Accordion>
                    </div>
                </div>
                <div className="guidelines">
                    <div className="r-c r-c-24">
                        <span className="rect"></span>
                        <h4>Guidelines</h4>
                    </div>
                    <div className="guideline-list blacklight p-3 mt-4">
                        <div className="guideline">
                            <p>
                                <span>1.</span> Lorem ipsum dolor, sit amet consectetur adipisicing
                                elit. Laborum consectetur cupiditate iusto repudiandae et impedit
                                ratione quaerat maiores officiis dolores!
                            </p>
                        </div>
                        <div className="guideline">
                            <p>
                                <span>2.</span> Lorem ipsum dolor, sit amet consectetur adipisicing
                                elit. Laborum consectetur cupiditate iusto repudiandae et impedit
                                ratione quaerat maiores officiis dolores!
                            </p>
                        </div>
                        <div className="guideline">
                            <p>
                                <span>3.</span> Lorem ipsum dolor, sit amet consectetur adipisicing
                                elit. Laborum consectetur cupiditate iusto repudiandae et impedit
                                ratione quaerat maiores officiis dolores!
                            </p>
                        </div>
                        <div className="guideline">
                            <p>
                                <span>4.</span> Lorem ipsum dolor, sit amet consectetur adipisicing
                                elit. Laborum consectetur cupiditate iusto repudiandae et impedit
                                ratione quaerat maiores officiis dolores!
                            </p>
                        </div>
                        <div className="guideline">
                            <p>
                                <span>5.</span> Lorem ipsum dolor, sit amet consectetur adipisicing
                                elit. Laborum consectetur cupiditate iusto repudiandae et impedit
                                ratione quaerat maiores officiis dolores!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Faqs;
