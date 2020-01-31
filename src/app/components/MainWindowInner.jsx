import React, { Component, Fragment } from "react";
import TaskDisplay from "./tasks/TaskDisplay";
import StatsDisplay from "./StatsDisplay";



const MainWindowInner = () => (
    <Fragment>
        <TaskDisplay />
        <StatsDisplay />
    </Fragment>
);

export default MainWindowInner;