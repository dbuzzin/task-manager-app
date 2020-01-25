import React, { Component, Fragment } from "react";
import TaskDisplay from "./TaskDisplay";
import StatsDisplay from "./StatsDisplay";



class MainWindowInner extends Component {

    render() {

        return( 

            <Fragment>

                <TaskDisplay />

                <StatsDisplay />

            </Fragment>

        );
    }
}

export default MainWindowInner;