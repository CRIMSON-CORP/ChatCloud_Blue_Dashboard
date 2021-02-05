import React, { useState, useEffect } from "react";
import { Line, Pie } from "react-chartjs-2";
import OnOutsideClick from "react-outclick";
import { CSSTransition } from "react-transition-group";
import { MdKeyboardArrowDown, MdPeople } from "react-icons/md";
import { BiChat, BiMessageCheck } from "react-icons/bi";
import { FaCogs, FaCommentDollar, FaEllipsisH } from "react-icons/fa";
import { IconContext } from "react-icons";
import { TimelineLite } from "gsap";

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
    const lineColor = ["#ed1c24", "#29b6f6", "#fdd835", "#7cb342", "#f4511e", "#7e57c2"];
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
                backgroundColor: "rgba(0,0,0,0.5)",
                data: [null],
            },
        ],
    });
    const [CurrentStats, setCurrentStats] = useState(main.currDayStats);
    useEffect(() => {
        var tl = new TimelineLite({ duration: 0.25 });
        tl.from(".header_tag h3", { y: 20, autoAlpha: 0 });
        tl.from(".r-c", { x: -20, autoAlpha: 0, stagger: { each: 0.5 } }, "-=.2");
        tl.from(
            ".card",
            {
                scale: 0.8,
                autoAlpha: 0,
                stagger: { each: 0.3 },
                duration: 0.5,
                ease: "back.out(2.5)",
            },
            "-=1.5"
        );
        tl.from(".options", { x: 20, autoAlpha: 0 }, "-=1");
        tl.from(".box", {
            scale: 0.8,
            autoAlpha: 0,
            stagger: { each: 0.125 },
            ease: "back.out(2)",
        });
    }, []);

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
    }, [page, website, facebook, instagram]);

    useEffect(() => {
        setCurrentStats(main.currDayStats);
    }, [main.currDayStats, page]);
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
                backgroundColor: lineColor,
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
                    borderColor: bg,
                    borderWidth: 3,
                    pointBorderWidth: 1.5,
                    pointBackgroundColor: "#444",
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
                                className="d-flex align-items-center justify-content-between page-box dropDown"
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
                        <h4>Overview - {page}</h4>
                    </div>
                    <div className="container-fluid">
                        <div className="row row-grid mt-3">
                            <div className="card-block">
                                <div className="container-fluid">
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
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="card line-graph blacklight">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <span className="card_label">Pie Chart</span>
                                            </div>
                                            <div className="graph pie-chart pt-2">
                                                <Pie
                                                    options={{
                                                        responsive: true,
                                                        legend: {
                                                            display: true,
                                                            position: "right",
                                                            labels: {
                                                                boxWidth: 20,
                                                                padding: 15,
                                                                fontFamily: "Roboto",
                                                                fontColor: "White",
                                                            },
                                                        },
                                                    }}
                                                    data={PieData}
                                                />
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
                                <h4>
                                    Today's Stat - <span className="text-muted small">{date}</span>
                                </h4>
                            </div>

                            <div className="row">
                                <div className="row today mt-3">
                                    <IconContext.Provider value={{ size: "2rem" }}>
                                        <div className="box shadow visitors">
                                            <div className="content">
                                                <div className="icon">
                                                    <MdPeople />
                                                </div>
                                                <div className="count">
                                                    <p>{graphPages[0]}</p>
                                                    <h3>{CurrentStats.visitors}</h3>
                                                </div>
                                            </div>
                                            <hr />
                                            <span className="tag">Total amount of Visitors</span>
                                        </div>
                                        <div className="box shadow chats">
                                            <div className="content">
                                                <div className="icon">
                                                    <BiChat fill="white" />
                                                </div>
                                                <div className="count">
                                                    <p>{graphPages[1]}</p>
                                                    <h3>{CurrentStats.chats}</h3>
                                                </div>
                                            </div>
                                            <hr />
                                            <span className="tag">
                                                Total amounts of Chats initiated
                                            </span>
                                        </div>
                                        <div className="box shadow leads">
                                            <div className="content">
                                                <div className="icon">
                                                    <BiMessageCheck />
                                                </div>
                                                <div className="count">
                                                    <p>{graphPages[2]}</p>
                                                    <h3>{CurrentStats.leads}</h3>
                                                </div>
                                            </div>
                                            <hr />
                                            <span className="tag">
                                                Toatl amount of Chats Converted to leads
                                            </span>
                                        </div>
                                        <div className="box shadow sales">
                                            <div className="content">
                                                <div className="icon">
                                                    <FaCommentDollar />
                                                </div>
                                                <div className="count">
                                                    <p>{graphPages[3]}</p>
                                                    <h3>{CurrentStats.sales}</h3>
                                                </div>
                                            </div>
                                            <hr />
                                            <span className="tag">
                                                Total amount of Successfull Sales
                                            </span>
                                        </div>
                                        <div className="box shadow services">
                                            <div className="content">
                                                <div className="icon">
                                                    <FaCogs />
                                                </div>
                                                <div className="count">
                                                    <p>{graphPages[4]}</p>
                                                    <h3>{CurrentStats.services}</h3>
                                                </div>
                                            </div>
                                            <hr />
                                            <span className="tag">
                                                Total amount of Services Rendered
                                            </span>
                                        </div>
                                        <div className="box shadow others">
                                            <div className="content">
                                                <div className="icon">
                                                    <FaEllipsisH />
                                                </div>
                                                <div className="count">
                                                    <p>{graphPages[5]}</p>
                                                    <h3>{CurrentStats.others}</h3>
                                                </div>
                                            </div>
                                            <hr />
                                            <span className="tag">Other Uncatergorized Leads</span>
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

function setGradient(canvas, bg) {
    const ctx = canvas.getContext("2d");
    const gradient = ctx.createLinearGradient(200, 0, 200, 200);
    gradient.addColorStop(0, bg);
    gradient.addColorStop(1, "rgba(0,0,0,0)");
    return gradient;
}
function LineGraph({ data, options }) {
    const bg = data.datasets[0].backgroundColor;
    function getChartData(canvas) {
        if (typeof bg === "string") {
            data.datasets[0].backgroundColor = setGradient(canvas, bg);
        }
        return data;
    }
    return data.datasets[0].data.length === 0 ? null : (
        <Line data={getChartData} options={options} />
    );
}

export default Dashboard;
