import React, { Fragment } from "react";
import { connect } from "react-redux";

import TabList from "./TabList";
import AddTaskButton from "../../AddTaskButton";

const TabWrapper = ({groups, style}) => (
    <Fragment>
        <TabList groups={groups} />
        <div className={`task-display__top ${style} inner-shadow-bottom-tiny`}>
            <AddTaskButton />
        </div>
    </Fragment>
);

const mapStateToProps = state => {
    const [openTab] = state.groups.filter(tab => tab.selected);
    return ({
        ...state,
        style: openTab.style
    });
}

export default connect(mapStateToProps)(TabWrapper);