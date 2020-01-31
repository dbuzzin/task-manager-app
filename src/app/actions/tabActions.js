export const SWITCH_OPEN_TAB = "SWITCH_OPEN_TAB";

export const switchOpenTab = (groupID, isOpen) => ({
    type: SWITCH_OPEN_TAB,
    isOpen: true,
    groupID,
});