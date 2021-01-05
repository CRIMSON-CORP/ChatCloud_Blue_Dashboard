import React from "react";
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
    return (
        <div className="container-fluid">
            <div className="row">
                <div>
                    <Switch>
                        <Route path="/Conversations" component={Conversations} />
                        <Route path="/Widgets" component={Widgets} />
                        <Route path="/Options" component={Options} />
                        <Route path="/Scripts" component={Scripts} />
                        <Route path="/Statistics" component={Statistics} />
                        <Route path="/Download_Plugins" component={Download_Plugins} />
                        <Route path="/Faqs" component={Faqs} />
                        <Route path={["/", "/Dashboard"]} exact component={Dashboard} />
                    </Switch>
                </div>
            </div>
        </div>
    );
}

export default Main;
