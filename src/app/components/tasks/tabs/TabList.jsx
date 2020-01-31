import React, { Fragment } from "react";
import { connect } from "react-redux";

import Tab from "./Tab";

const TabList = ({groups}) => (
    <Fragment>
        <div className="task-display__tabs">
            {groups.map(tab => (
                <Tab id={tab.id} name={tab.name} style={tab.style} isOpen={tab.selected} key={tab.id}/>
            ))}
        </div>
    </Fragment>
);

export default connect()(TabList);