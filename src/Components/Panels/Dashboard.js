import React, { useState, useEffect } from "react";
import OnOutsideClick from "react-outclick";
import { CSSTransition } from "react-transition-group";
import { MdKeyboardArrowDown } from "react-icons/md";

import { Line, Pie } from "react-chartjs-2";

function Dashboard({
    props: {
        apiData: {
            data: {
                charts: {
                    lineChart: { chats, visitors, leads, sales, services, others },
                },
            },
        },
    },
}) {
    console.table(visitors.count);
    // const [Data, setData] = useState(apiData);
    const [statDrop, setStatDrop] = useState(false);
    const [pages] = useState(["Website", "Facebook", "Instagram"]);
    const [page, setPage] = useState("Website");
    const [graphPages] = useState(["Visitors", "Chats", "Leads", "Sales", "Services", "Others"]);
    const [graphDrop, setGraphDrop] = useState(false);
    const [graph, setGraph] = useState("Visitors");
    const [lineGraphData, setLineGraphData] = useState(others);
    const [lineColor] = useState({
        visitors: "red",
        chats: "cyan",
        sales: "yellow",
        leads: "green",
        services: "orange",
        others: "violet",
    });

    useEffect(() => {
        switch (graph) {
            case "Visitors":
                setLineGraph(visitors, lineColor.visitors);
                break;
            case "Chats":
                setLineGraph(chats, lineColor.chats);
                break;
            case "Leads":
                setLineGraph(leads, lineColor.leads);
                break;
            case "Sales":
                setLineGraph(sales, lineColor.sales);
                break;
            case "Services":
                setLineGraph(services, lineColor.services);
                break;
            case "Others":
                setLineGraph(others, lineColor.others);
                break;
            default:
                setLineGraph(others, lineColor.visitors);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [graph]);

    function setLineGraph({ count }, bg) {
        var GrpahData = {
            labels: ["06:00", "12:00", "18:00", "24:00"],
            datasets: [
                {
                    backgroundColor: bg,
                    data: count,
                },
            ],
        };

        setLineGraphData(GrpahData);
    }

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
                    <div className="container">
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
                                                <Line
                                                    options={{
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
                                                    }}
                                                    data={lineGraphData}
                                                />
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
                                                    options={{
                                                        responsive: true,
                                                        legend: { display: false },
                                                    }}
                                                    data={lineGraphData}
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
            </div>
        </div>
    );
}

export default Dashboard;
