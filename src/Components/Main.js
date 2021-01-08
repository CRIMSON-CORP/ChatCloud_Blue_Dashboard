import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Conversations from "./Panels/Conversations";
import Dashboard from "./Panels/Dashboard";
import Widgets from "./Panels/Widgets";
import Options from "./Panels/Options";
import Scripts from "./Panels/Scripts";
import Statistics from "./Panels/Statistics";
import Download_Plugins from "./Panels/Download_Plugins";
import Faqs from "./Panels/Faqs";

function Main() {
    const [apiData, setApiData] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchCall() {
            var data = await fetch("/api.json");
            data = await data.json();
            setApiData(data);
            setLoading(false);
        }
        fetchCall();
    }, []);
    return (
        <div className="container-fluid panel-wrapper">
            {loading ? (
                <div className="loading">
                    <h1>Fetching Data...</h1>
                </div>
            ) : (
                <div className="row">
                    <div>
                        <Switch>
                            <Route
                                path="/Conversations"
                                component={Conversations}
                                props={apiData}
                            />
                            <Route path="/Widgets">
                                <Widgets props={{ apiData: apiData }} />
                            </Route>
                            <Route path="/Options">
                                <Options props={{ apiData: apiData }} />
                            </Route>

                            <Route path="/Scripts" component={Scripts} />
                            <Route path="/Statistics" component={Statistics} />
                            <Route path="/Download_Plugins" component={Download_Plugins} />
                            <Route path="/Faqs" component={Faqs} />
                            <Route path={["/", "/Dashboard"]}>
                                <Dashboard props={{ apiData: apiData }} />
                            </Route>
                        </Switch>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Main;
