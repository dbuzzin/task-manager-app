import React, { Fragment } from "react";
import { Provider } from "react-redux";

import store from "../store/store";

import MainWindowInner from "./MainWindowInner";

const App = () => (
    <Provider store={store}>
        <MainWindowInner />
    </Provider>
);

export default App;