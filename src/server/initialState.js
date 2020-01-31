import uuid from "uuid";

const initialState = {

    users: [
        {
            id              : uuid(),
            name            : "userName1"
        },
        {
            id              : uuid(),
            name            : "userName2"
        },
        {
            id              : uuid(),
            name            : "userName3"
        }
    ],

    tasks: [
        {
            id              : uuid(),
            name            : "Task 1",
            description     : "A grey bar indicates the task can't be rejected and must be completed by the user it's assigned to.",
            userAssigned    : "userName1",
            dateAssigned    : "...",
            deadline        : "...",
            groupID         : "g1",
            important       : true,
            sliderOpen      : false
        },
        {
            id              : uuid(),
            name            : "Task 2",
            description     : "If the bar at the side is red, the task can be rejected by clicking on the task body to open the side bar.",
            userAssigned    : "userName2",
            dateAssigned    : "...",
            deadline        : "...",
            groupID         : "g1",
            important       : false,
            sliderOpen      : false
        },
        {
            id              : uuid(),
            name            : "Task 3",
            description     : "When the star is clicked on an assigned task, it is then moved under this tab to show it is being worked on.",
            userAssigned    : "userName2",
            dateAssigned    : "...",
            deadline        : "...",
            groupID         : "g2",
            important       : false,
            sliderOpen      : false
        },
        {
            id              : uuid(),
            name            : "Task 4",
            description     : "This is the desciption of another task which will be displayed as complete",
            userAssigned    : "userName1",
            dateAssigned    : "...",
            deadline        : "...",
            groupID         : "g4",
            important       : false,
            sliderOpen      : false
        },
        {
            id              : uuid(),
            name            : "Task 5",
            description     : "When a task is on hold the star turns to red. Once a task is opened, it can only be set to on hold or complete",
            userAssigned    : "userName1",
            dateAssigned    : "...",
            deadline        : "...",
            groupID         : "g3",
            important       : false,
            sliderOpen      : false
        },
        {
            id              : uuid(),
            name            : "Task 6",
            description     : "When a task is open it will have a green bar at the side. Click on the body of the task to open the bar and complete.",
            userAssigned    : "userName2",
            dateAssigned    : "...",
            deadline        : "...",
            groupID         : "g2",
            important       : false,
            sliderOpen      : false
        },
        {
            id              : uuid(),
            name            : "Task 7",
            description     : "This task has been rejected. Rejected tasks must be given reason",
            userAssigned    : "userName2",
            dateAssigned    : "...",
            deadline        : "...",
            groupID         : "g5",
            important       : false,
            sliderOpen      : false
        },
    ],

    groups: [
        {
            id              : "g1",
            name            : "Assigned",
            style           : "color-assigned",
            selected        : true,
            interaction     : ""
        },
        {
            id              : "g2",
            name            : "Open",
            style           : "color-open",
            selected        : false,
            interaction     : ""
        },
        {
            id              : "g3",
            name            : "On Hold",
            style           : "color-hold",
            selected        : false,
            interaction     : ""
        },
        {
            id              : "g4",
            name            : "Complete",
            style           : "color-complete",
            selected        : false,
            interaction     : ""
        },
        {
            id              : "g5",
            name            : "Rejected",
            style           : "color-rejected",
            selected        : false,
            interaction     : ""
        },
    ]
};

export default initialState;