export const TOGGLE_MODAL_OPEN = "TOGGLE_MODAL_OPEN";
export const TOGGLE_MODAL_CLOSE = "TOGGLE_MODAL_CLOSE";
export const MODAL_FADE_DELAY = "MODAL_FADE_DELAY";
export const MODAL_OPEN_DELAY = "MODAL_OPEN_DELAY";

export const toggleModalOpen = () => ({
    type: TOGGLE_MODAL_OPEN
});

export const toggleModalClose = () => ({
    type: TOGGLE_MODAL_CLOSE
});

export const modalOpenDelay = () => ({
    type: MODAL_OPEN_DELAY
});

export const modalFadeDelay = () => ({
    type: MODAL_FADE_DELAY
});

// export const toggleModalOpen = () => ({
//     type: TOGGLE_MODAL_OPEN
// })

// export const toggleModalOpen = () => ({
//     type: TOGGLE_MODAL_OPEN
// })