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
        tl.from(".guideline-list", { opacity: 0 }, "-=1.5");
    }, []);

    const Accordions = [
        {
            header: "Lorem ipsum dolor sit amet, consectetur",
            body: `Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Eligendi odit est esse quisquam eveniet magnam
            reprehenderit nihil placeat quos animi?`,
        },
        {
            header: "Lorem ipsum dolor sit amet, consectetur",
            body: `Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Eligendi odit est esse quisquam eveniet magnam
            reprehenderit nihil placeat quos animi?`,
        },
        {
            header: "Lorem ipsum dolor sit amet, consectetur",
            body: `Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Eligendi odit est esse quisquam eveniet magnam
            reprehenderit nihil placeat quos animi?`,
        },
        {
            header: "Lorem ipsum dolor sit amet, consectetur",
            body: `Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Eligendi odit est esse quisquam eveniet magnam
            reprehenderit nihil placeat quos animi?`,
        },
        {
            header: "Lorem ipsum dolor sit amet, consectetur",
            body: `Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Eligendi odit est esse quisquam eveniet magnam
            reprehenderit nihil placeat quos animi?`,
        },
        {
            header: "Lorem ipsum dolor sit amet, consectetur",
            body: `Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Eligendi odit est esse quisquam eveniet magnam
            reprehenderit nihil placeat quos animi?`,
        },
        {
            header: "Lorem ipsum dolor sit amet, consectetur",
            body: `Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Eligendi odit est esse quisquam eveniet magnam
            reprehenderit nihil placeat quos animi?`,
        },
        {
            header: "Lorem ipsum dolor sit amet, consectetur",
            body: `Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Eligendi odit est esse quisquam eveniet magnam
            reprehenderit nihil placeat quos animi?`,
        },
    ];

    const Guidelines = [
        `Lorem ipsum dolor, sit amet consectetur adipisicing
        elit. Laborum consectetur cupiditate iusto repudiandae et impedit
        ratione quaerat maiores officiis dolores!`,
        `Lorem ipsum dolor, sit amet consectetur adipisicing
        elit. Laborum consectetur cupiditate iusto repudiandae et impedit
        ratione quaerat maiores officiis dolores!`,
        `Lorem ipsum dolor, sit amet consectetur adipisicing
        elit. Laborum consectetur cupiditate iusto repudiandae et impedit
        ratione quaerat maiores officiis dolores!`,
        `Lorem ipsum dolor, sit amet consectetur adipisicing
        elit. Laborum consectetur cupiditate iusto repudiandae et impedit
        ratione quaerat maiores officiis dolores!`,
        `Lorem ipsum dolor, sit amet consectetur adipisicing
        elit. Laborum consectetur cupiditate iusto repudiandae et impedit
        ratione quaerat maiores officiis dolores!`,
    ];

    var AccordionJSX = Accordions.map(({ header, body }, index) => {
        return (
            <AccordionItem key={index}>
                <AccordionItemState>
                    {({ expanded }) => {
                        return (
                            <>
                                <AccordionItemHeading>
                                    <AccordionItemButton
                                        className={`accordion__button ${
                                            expanded ? "expanded" : "collapsed"
                                        }`}
                                    >
                                        <h5>{header}</h5>
                                        <FiArrowDown size="1.5rem" style={{ color: " #ed1c24" }} />
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel
                                    hidden={false}
                                    aria-hidden={false}
                                    className={`accordion__panel ${
                                        expanded ? "para-expanded" : "para-collapsed"
                                    }`}
                                >
                                    <p>{body}</p>
                                </AccordionItemPanel>
                            </>
                        );
                    }}
                </AccordionItemState>
            </AccordionItem>
        );
    });

    var GuidelinesJSX = Guidelines.map((guideline, index) => {
        return (
            <div className="guideline" key={index}>
                <p>
                    <span>{index + 1}.</span> {guideline}
                </p>
            </div>
        );
    });
    return (
        <div className="container-fluid faqs">
            <div className="row-grid">
                <div className="faq_inner">
                    <div className="r-c r-c-24">
                        <h4>Frequently Asked Questions</h4>
                    </div>
                    <div className="accordion mt-4">
                        <Accordion allowZeroExpanded={true} allowMultipleExpanded={true}>
                            {AccordionJSX}
                        </Accordion>
                    </div>
                </div>
                <div className="guidelines">
                    <div className="r-c r-c-24">
                        <h4>Guidelines</h4>
                    </div>
                    <div className="guideline-list blacklight p-3 mt-4">{GuidelinesJSX}</div>
                </div>
            </div>
        </div>
    );
}

export default Faqs;
