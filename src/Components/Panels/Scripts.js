import React, { useState, useEffect, useRef } from "react";
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
    useEffect(() => {
        var tl = new TimelineLite({ duration: 0.2 });
        tl.from(".header_tag h3", { y: 20, opacity: 0 })
            .from(".scripts .script-tab, .spInstruct", {
                autoAlpha: 0,
                scale: 0.9,
                ease: "back.out(2)",
                stagger: { each: 0.25 },
            })
            .from(".scripts .r-c", { x: -20, opacity: 0, stagger: { each: 0.25 } })
            .from(".scripts .search", { opacity: 0, scale: 0.9, ease: "back.out(1.7)" })
            .from(".scripts .accordion__heading", {
                opacity: 0,
                scale: 0.9,
                stagger: { each: 0.2 },
                ease: "back.out(1.7)",
            });
    }, []);

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
                    <ScriptsTab queries={queries} />
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

function ScriptsTab({ queries }) {
    const [AllQueries, setAllQueries] = useState(queries);
    const [editState, setEditState] = useState(false);
    const [query_to_edit, setQuerytoEdit] = useState(null);
    const [deleteState, setDeleteState] = useState(false);
    const [query_to_delete, setQuerytoDelete] = useState({});
    const [save, setSave] = useState(false);
    const ScriptRef = useRef();

    var Queries = queries.map(({ content, label, labelId }, index) => {
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
                                        {label}
                                    </p>
                                );
                            }}
                        </AccordionItemState>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    {content.length === 0 ? (
                        <p className="text-center">No Scripts</p>
                    ) : (
                        content.map(({ text, id }, index) => {
                            return (
                                <div className="string-container" key={index}>
                                    <div className="blacklight my-1 p-2 string">
                                        <p>{text}</p>
                                        <FiEdit
                                            onClick={() => {
                                                setEditState(true);
                                                setQuerytoEdit({ text, id, labelId });
                                                ScriptRef.current.scrollTop = 0;
                                            }}
                                        />
                                        <FiMinus
                                            onClick={() => {
                                                setDeleteState(true);
                                                setEditState(false);
                                                setQuerytoDelete({ text, id, labelId });
                                                ScriptRef.current.scrollTop = 0;
                                            }}
                                        />
                                    </div>
                                </div>
                            );
                        })
                    )}
                </AccordionItemPanel>
            </AccordionItem>
        );
    });

    return (
        <div className="p-3 blacklight script-tab">
            <div className="r-c r-c-16">
                <h5>Scripts</h5>
            </div>
            <div className="row">
                <div className="blackdark p-2 mt-3 overflow" ref={ScriptRef}>
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
                    {save && (
                        <Save
                            props={{
                                AllQueries,
                                setSave,
                            }}
                        />
                    )}
                    {editState && (
                        <Edit
                            props={{
                                setEditState,
                                query_to_edit,
                                AllQueries,
                                setAllQueries,
                                setSave,
                            }}
                        />
                    )}
                    {deleteState && (
                        <Delete
                            props={{
                                setDeleteState,
                                query_to_delete,
                                AllQueries,
                                setAllQueries,
                                setSave,
                            }}
                        />
                    )}

                    <div className="row mt-4">
                        <div className="accordion">
                            <Accordion allowZeroExpanded={true} allowMultipleExpanded={true}>
                                {Queries}
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Edit({
    props: {
        query_to_edit: { id, labelId, text },
        setEditState,
        AllQueries,
        setAllQueries,
        setSave,
    },
}) {
    const [newScript, setNewScript] = useState("");
    function editQuery() {
        if (newScript === "") return;
        setAllQueries(
            AllQueries.map((queries) => {
                if (queries.labelId === labelId) {
                    queries.content.map((query) => {
                        if (query.id === id) query.text = newScript;
                        return query;
                    });
                }
                return queries;
            })
        );
        // Call Api to Edit query with the Id in parameter
        setSave(true);
        setEditState(false);
        return;
    }

    return (
        <div className="search edit mt-3">
            <div className="searchbar blacklight p-2">
                <p className="tag">Edit Script</p>
                <div className="searchBarConatiner">
                    <form>
                        <input
                            type="text"
                            name="edit"
                            id="search"
                            className="mb-2"
                            placeholder={text}
                            onChange={(e) => {
                                setNewScript(e.target.value);
                            }}
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
                                onClick={(e) => {
                                    e.preventDefault();
                                    editQuery();
                                }}
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

function Delete({
    props: {
        query_to_delete: { id, labelId, text },
        setDeleteState,
        AllQueries,
        setAllQueries,
        setSave,
    },
}) {
    function deleteQuery() {
        const NewArr = AllQueries.map((queries) => {
            if (queries.labelId === labelId) {
                var newList = queries.content.filter((query) => query.id !== id);
                queries.content = newList;
            }
            return queries;
        });
        setAllQueries(NewArr);
        // Call Api to Edit query with the Id in parameter
        setSave(true);
        setDeleteState(false);
        return;
    }

    return (
        <div className="Delete blacklight mt-3 p-2">
            <p className="tag">Delete Script?</p>
            <p className="italic my-2 query_text">{text}</p>
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
                        deleteQuery();
                    }}
                />
            </div>
        </div>
    );
}

function Save({ props: { AllQueries, setSave } }) {
    function saveChanges() {
        // Push All Queries to API
        setSave(false);
    }
    return (
        <div className="Delete blacklight mt-3 p-2">
            <p className="tag">Save Changes ?</p>
            <div className="action mt-2">
                <input
                    type="button"
                    value="Cancel"
                    className="blackdark"
                    onClick={() => {
                        setSave(false);
                    }}
                />
                <input
                    type="submit"
                    value="Save"
                    className="save"
                    onClick={() => {
                        saveChanges();
                    }}
                />
            </div>
        </div>
    );
}
