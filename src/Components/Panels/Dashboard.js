import React, { useState, useEffect } from "react";
import OnOutsideClick from "react-outclick";
import { CSSTransition } from "react-transition-group";
import { MdKeyboardArrowDown, MdPeople } from "react-icons/md";
import { BiChat, BiMessageCheck } from "react-icons/bi";
import { FaCogs, FaCommentDollar, FaEllipsisH } from "react-icons/fa";
import { IconContext } from "react-icons";

import { Line, Pie } from "react-chartjs-2";

function Dashboard({
    props: {
        apiData: {
            data: {
                date,
                charts: { website, facebook, instagram },
            },
        },
    },
}) {
    // Static Variables
    const labels = ["06:00", "12:00", "18:00", "24:00"];
    const pages = ["Website", "Facebook", "Instagram"];
    const graphPages = ["Visitors", "Live Chats", "Leads", "Sales", "Services", "Others"];
    const lineColor = ["red", "cyan", "yellow", "green", "orange", "violet"];
    // End of Static variables

    const [main, setMain] = useState(website);
    const [statDrop, setStatDrop] = useState(false);
    const [page, setPage] = useState("Website");
    const [graphDrop, setGraphDrop] = useState(false);
    const [graph, setGraph] = useState("Visitors");

    const [lineGraphData, setLineGraphData] = useState({
        labels: labels,
        datasets: [
            {
                backgroundColor: lineColor[0],
                data: "",
            },
        ],
    });
    const [CurrentStats, setCurrentStats] = useState(main.currDayStats);

    useEffect(() => {
        switch (page) {
            case "Website":
                setMain(website);
                break;
            case "Facebook":
                setMain(facebook);
                break;
            case "Instagram":
                setMain(instagram);
                break;
            default:
                setMain(website);
        }
        setCurrentStats(main.currDayStats);
    }, [page, website, facebook, instagram, main.currDayStats]);

    const DataServeLogic = {};

    const PieData = {
        labels: graphPages,
        datasets: [
            {
                label: "Stats",
                data: [
                    CurrentStats.visitors,
                    CurrentStats.chats,
                    CurrentStats.leads,
                    CurrentStats.sales,
                    CurrentStats.services,
                    CurrentStats.others,
                ],
                backgroundColor: [
                    lineColor[0],
                    lineColor[1],
                    lineColor[2],
                    lineColor[3],
                    lineColor[4],
                    lineColor[5],
                ],
                borderWidth: 0,
                hoverBorderWidth: 2,
            },
        ],
    };

    useEffect(() => {
        switch (graph) {
            case "Visitors":
                setLineGraph(main.visitors, lineColor[0]);
                break;
            case "Live Chats":
                setLineGraph(main.chats, lineColor[1]);
                break;
            case "Leads":
                setLineGraph(main.leads, lineColor[2]);
                break;
            case "Sales":
                setLineGraph(main.sales, lineColor[3]);
                break;
            case "Services":
                setLineGraph(main.services, lineColor[4]);
                break;
            case "Others":
                setLineGraph(main.others, lineColor[5]);
                break;
            default:
                setLineGraph(main.visitors, lineColor[0]);
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [graph, main.chats, main.leads, main.others, main.sales, main.services, main.visitors]);

    function setLineGraph(count, bg) {
        var GrpahData = {
            labels: labels,
            datasets: [
                {
                    backgroundColor: bg,
                    data: count,
                },
            ],
        };
        setLineGraphData(GrpahData);
    }

    const options = {
        responsive: true,
        legend: { display: false },
        scales: {
            xAxes: [
                {
                    gridLines: {
                        display: false,
                    },
                },
            ],
            yAxes: [
                {
                    gridLines: {
                        display: false,
                    },
                },
            ],
        },
    };

    var list = pages.map((page, index) => {
        return (
            <li
                key={index}
                className="list-group-item p-2"
                onClick={() => {
                    setPage(page);
                    setStatDrop(false);
                }}
            >
                {page}
            </li>
        );
    });
    var graphs = graphPages.map((graph, index) => {
        return (
            <li
                key={index}
                className="list-group-item p-2"
                onClick={() => {
                    setGraph(graph);
                    setGraphDrop(false);
                }}
            >
                {graph}
            </li>
        );
    });

    // Static Variables
    return (
        <div className="container-fluid dashboard">
            <div className="header">
                <div className="header_tag">
                    <h3>Dashboard</h3>
                </div>
                <div className="options">
                    <p>Show Stats for</p>
                    <OnOutsideClick
                        onOutsideClick={() => {
                            setStatDrop(false);
                        }}
                    >
                        <div className={`pages blacklight ${statDrop ? "drop" : ""}`}>
                            <div
                                className="d-flex justify-content-lg-between align-items-center page-box dropDown"
                                onClick={() => {
                                    setStatDrop(!statDrop);
                                }}
                            >
                                {page}
                                <span>
                                    <MdKeyboardArrowDown size="1.4rem" />
                                </span>
                            </div>
                            <CSSTransition
                                in={statDrop}
                                timeout={400}
                                classNames="drop"
                                unmountOnExit
                            >
                                <div className="card drop-down shadow rounded-0">
                                    <div className="card-header p-2">Pages</div>

                                    <div className="card-body">
                                        <ul className="list-group">{list}</ul>
                                    </div>
                                </div>
                            </CSSTransition>
                        </div>
                    </OnOutsideClick>
                </div>
            </div>
            <div className="container-fluid mt-4">
                <div className="row">
                    <div className="r-c r-c-16">
                        <span className="rect"></span>
                        <h4>Overview - {page}</h4>
                    </div>
                    <div className="container-fluid">
                        <div className="row row-grid">
                            <div className="card-block">
                                <div className="container-fluid mt-4">
                                    <div className="row">
                                        <div className="card line-graph blacklight">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <span className="card_label">Line Graph</span>
                                                <OnOutsideClick
                                                    onOutsideClick={() => {
                                                        setGraphDrop(false);
                                                    }}
                                                >
                                                    <div
                                                        className={`graphs blackdark ${
                                                            graphDrop ? "drop" : ""
                                                        }`}
                                                    >
                                                        <div
                                                            className="d-flex justify-content-between align-items-center graph-box dropDown"
                                                            onClick={() => {
                                                                setGraphDrop(!graphDrop);
                                                            }}
                                                        >
                                                            {graph}
                                                            <span>
                                                                <MdKeyboardArrowDown size="1.2rem" />
                                                            </span>
                                                        </div>
                                                        <CSSTransition
                                                            in={graphDrop}
                                                            timeout={400}
                                                            classNames="drop"
                                                            unmountOnExit
                                                        >
                                                            <div className="card drop-down shadow rounded-0 p-0">
                                                                <div className="card-header p-2">
                                                                    Graphs
                                                                </div>

                                                                <div className="card-body">
                                                                    <ul className="list-group">
                                                                        {graphs}
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </CSSTransition>
                                                    </div>
                                                </OnOutsideClick>
                                            </div>
                                            <div className="graph pt-2">
                                                <LineGraph data={lineGraphData} options={options} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-block">
                                <div className="container-fluid mt-4">
                                    <div className="row">
                                        <div className="card line-graph blacklight">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <span className="card_label">Pie Chart</span>
                                            </div>
                                            <div className="graph pie-chart pt-2">
                                                <Pie
                                                    style={{ width: 200, display: "none" }}
                                                    options={{
                                                        legend: {
                                                            display: true,
                                                            position: "right",
                                                        },
                                                    }}
                                                    data={PieData}
                                                />

                                                {/* <div className="pie-records">
                                                    <ul>li</ul>
                                                </div> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="container-fluid">
                        <div className="row mt-4">
                            <div className="r-c r-c-16">
                                <span className="rect"></span>
                                <h4>
                                    Today's Stat - <span className="text-muted small">{date}</span>
                                </h4>
                            </div>

                            <div className="row mt-4">
                                <div className="row today">
                                    <IconContext.Provider value={{ size: "1.5rem" }}>
                                        <div className="box shadow">
                                            <div className="icon">
                                                <MdPeople />
                                            </div>
                                            <div className="count">
                                                <h3>{CurrentStats.visitors}</h3>
                                                <p>{graphPages[0]}</p>
                                            </div>
                                        </div>
                                        <div className="box shadow">
                                            <div className="icon">
                                                <BiChat fill="white" />
                                            </div>
                                            <div className="count">
                                                <h3>{CurrentStats.chats}</h3>
                                                <p>{graphPages[1]}</p>
                                            </div>
                                        </div>
                                        <div className="box shadow">
                                            <div className="icon">
                                                {" "}
                                                <BiMessageCheck />
                                            </div>
                                            <div className="count">
                                                <h3>{CurrentStats.leads}</h3>
                                                <p>{graphPages[2]}</p>
                                            </div>
                                        </div>
                                        <div className="box shadow">
                                            <div className="icon">
                                                <FaCommentDollar />
                                            </div>
                                            <div className="count">
                                                <h3>{CurrentStats.sales}</h3>
                                                <p>{graphPages[3]}</p>
                                            </div>
                                        </div>
                                        <div className="box shadow">
                                            <div className="icon">
                                                <FaCogs />
                                            </div>
                                            <div className="count">
                                                <h3>{CurrentStats.services}</h3>
                                                <p>{graphPages[4]}</p>
                                            </div>
                                        </div>
                                        <div className="box shadow">
                                            <div className="icon">
                                                <FaEllipsisH />
                                            </div>
                                            <div className="count">
                                                <h3>{CurrentStats.others}</h3>
                                                <p>{graphPages[5]}</p>
                                            </div>
                                        </div>
                                    </IconContext.Provider>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function LineGraph({ data, options }) {
    return <Line data={data} options={options} />;
}

export default Dashboard;
