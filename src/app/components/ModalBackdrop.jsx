import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";

import * as modalActions from "../actions/modalActions";

const ModalBackdrop = ({width, open, styles, toggleModalClose, children}) => {
    return !open 
        ? null 
        : ReactDOM.createPortal(
        <div className={styles.active}>    
            <div className="modal-backdrop__window" style={{width: width}}>
                <span className="modal-backdrop__window-closebtn" onClick={toggleModalClose}>&times;</span>
                {children}
            </div>
        </div>
    , document.body);    
};

const mapStateToProps = (state) => {
    return (
        state.modal
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleModalClose: () => {
            dispatch(modalActions.modalFadeDelay());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalBackdrop);