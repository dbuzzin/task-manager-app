import initialState from "../../server/initialState";

import * as tabActions from "../actions/tabActions";

const groupsReducer = (groups = initialState.groups, action) => {
    switch(action.type) {
        case tabActions.SWITCH_OPEN_TAB:
            return groups.map(tab => {
                tab.selected = false;
                return (tab.id === action.groupID) ? {...tab, selected: action.isOpen} : tab;
            });
    }
    return groups;
}

export default groupsReducer;