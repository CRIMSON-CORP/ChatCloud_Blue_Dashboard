import React, { useState, useEffect } from "react";
import { TimelineLite } from "gsap";
import { FiSearch, FiEdit, FiMinus } from "react-icons/fi";
import { BiCaretDown } from "react-icons/bi";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState,
} from "react-accessible-accordion";

function Scripts({
    props: {
        apiData: { queries },
    },
}) {
    const [editState, setEditState] = useState(false);
    const [deleteState, setDeleteState] = useState(false);
    const [query_to_edit, setQuerytoEdit] = useState({});
    const [query_to_delete, setQuerytoDelete] = useState({});

    useEffect(() => {
        var tl = new TimelineLite({ duration: 0.2 });
        tl.from(".header_tag h3", { y: 20, opacity: 0 })
            .from(".scripts .script-tab", {
                autoAlpha: 0,
                scale: 0.9,
                ease: "back.out(2)",
            })
            .from(".scripts .r-c", { x: -20, opacity: 0 })
            .from(".scripts .search", { opacity: 0, scale: 0.9, ease: "back.out(1.7)" })
            .from(".scripts .accordion__heading", {
                opacity: 0,
                scale: 0.9,
                stagger: { each: 0.2 },
                ease: "back.out(1.7)",
            });
    }, []);

    function editQuery({ text, id }) {
        if (!text) return;
        // Call Api to Edit query with the Id in parameter
        setEditState(false);
        return;
    }

    function DeleteQuery(id) {
        if (!id) return;
        // Call Api to Delete query with the Id in parameter
        setEditState(false);
        return;
    }

    var Queries = queries.map((query, index) => {
        return (
            <AccordionItem key={index}>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        <AccordionItemState>
                            {({ expanded }) => {
                                return (
                                    <p className="query_header blacklight mb-2 p-2">
                                        <BiCaretDown
                                            className={`mr-1 caret ${expanded ? "ex" : "clp"}`}
                                        />
                                        {query.label}
                                    </p>
                                );
                            }}
                        </AccordionItemState>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    {query.content.map(({ text, id }, index) => {
                        return (
                            <div className="string-container" key={index}>
                                <div className="blacklight my-1 p-2 string">
                                    <p>{text}</p>
                                    <FiEdit
                                        onClick={() => {
                                            setEditState(true);
                                            setDeleteState(false);
                                            setQuerytoEdit({ text, id });
                                        }}
                                    />
                                    <FiMinus
                                        onClick={() => {
                                            setDeleteState(true);
                                            setEditState(false);
                                            setQuerytoDelete({ text, id });
                                        }}
                                    />
                                </div>
                            </div>
                        );
                    })}
                </AccordionItemPanel>
            </AccordionItem>
        );
    });

    const Instructions = [
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

    var InstructionsJSX = Instructions.map((instruction, index) => {
        return (
            <div className="instruction" key={index}>
                <p>
                    <span>{index + 1}.</span> {instruction}
                </p>
            </div>
        );
    });

    return (
        <div className="container-fluid scripts">
            <div className="header_tag">
                <h3>Scripts</h3>
            </div>
            <div className="container-fluid mt-4">
                <div className="row row-grid">
                    <div className="p-3 blacklight script-tab">
                        <div className="r-c r-c-16">
                            <h5>Scripts</h5>
                        </div>
                        <div className="row">
                            <div className="blackdark p-2 mt-3 overflow">
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
                                {editState && (
                                    <div className="search edit mt-3">
                                        <div className="searchbar blacklight p-2">
                                            <p className="tag">Edit Query</p>
                                            <div className="searchBarConatiner">
                                                <form>
                                                    <input
                                                        type="text"
                                                        name="edit"
                                                        id="search"
                                                        className="mb-2"
                                                        placeholder={query_to_edit.text}
                                                    />
                                                    <div className="action">
                                                        <input
                                                            type="button"
                                                            value="Cancel"
                                                            onClick={() => {
                                                                setEditState(false);
                                                            }}
                                                        />
                                                        <input
                                                            type="submit"
                                                            value="Edit"
                                                            className="edit"
                                                            onClick={() => {
                                                                setEditState(false);
                                                                editQuery(query_to_edit);
                                                            }}
                                                        />
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                {deleteState && (
                                    <div className="Delete blacklight mt-3 p-2">
                                        <p className="tag">Delete Query?</p>
                                        <p className="italic my-2 query_text">
                                            {query_to_delete.text}
                                        </p>
                                        <div className="action">
                                            <input
                                                type="button"
                                                value="No"
                                                className="blackdark"
                                                onClick={() => {
                                                    setDeleteState(false);
                                                }}
                                            />
                                            <input
                                                type="submit"
                                                value="Yes"
                                                className="del"
                                                onClick={() => {
                                                    setDeleteState(false);
                                                    DeleteQuery(query_to_delete.id);
                                                }}
                                            />
                                        </div>
                                    </div>
                                )}

                                <div className="row mt-4">
                                    <div className="accordion">
                                        <Accordion
                                            allowZeroExpanded={true}
                                            allowMultipleExpanded={true}
                                        >
                                            {Queries}
                                        </Accordion>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-3 blacklight spInstruct">
                        <div className="r-c r-c-16">
                            <h5>Special Instructions</h5>
                        </div>
                        <div className="guideline-list blacklight mt-3">{InstructionsJSX}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Scripts;
