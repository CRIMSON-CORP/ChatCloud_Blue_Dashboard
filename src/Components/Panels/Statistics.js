import React, { useEffect, useState } from "react";
import { BiMessageCheck } from "react-icons/bi";
import { FaDollarSign } from "react-icons/fa";
import { MdPeople } from "react-icons/md";
function Statistics({
    props: {
        apiData: { statistics },
    },
}) {
    const [dates, setDates] = useState("today");
    const [pageToRender, setPageToRender] = useState(statistics.headerData.today);
    const [dataToRender, setDataToRender] = useState(statistics.headerData.today);
    const tabs = ["Today", "Week", "Month", "Year"];

    useEffect(() => {
        switch (dates) {
            case "today":
                setPageToRender(statistics.headerData.today);
                break;
            case "week":
                setPageToRender(statistics.headerData.week);
                break;
            case "month":
                setPageToRender(statistics.headerData.month);
                break;
            case "year":
                setPageToRender(statistics.headerData.year);
                break;
            default:
                setPageToRender(statistics.headerData.today);
        }
    }, [dates]);

    const tabsJSX = tabs.map((tab, index) => {
        return (
            <div
                className={`DateTabs shadow ${dates === tab.toLowerCase() ? "active" : ""}`}
                key={index}
                onClick={() => {
                    setDates(tab.toLowerCase());
                }}
            >
                {tab}
            </div>
        );
    });
    const headerDataJSX = pageToRender.map((data, index) => {
        var icon = null;
        switch (data.header) {
            case "Visitors":
                icon = <MdPeople />;
                break;
            case "Sales":
                icon = <FaDollarSign />;
                break;
            case "Leads":
                icon = <BiMessageCheck />;
                break;
            default:
                icon = null;
        }
        return (
            <div className="col-md-4" key={index}>
                <div className={`p-4 wrapper ${data.header.toLowerCase()}`}>
                    <h3 className="headrer">{data.header}</h3>
                    <h1 className="count">{data.data}</h1>
                    <span className="percent">{data.percent}%</span>
                    <div className="icon">{icon}</div>
                </div>
            </div>
        );
    });
    return (
        <div className="container-fluid statistics">
            <div className="header d-flex justify-content-between align-items-center">
                <div className="header_tag">
                    <h3>Statistics</h3>
                </div>
                <div className="date d-flex">{tabsJSX}</div>
            </div>
            <div className="container-fluid mt-4">
                <div className="row">{headerDataJSX}</div>
            </div>
        </div>
    );
}

export default Statistics;
