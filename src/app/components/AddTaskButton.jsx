import React from "react";
import { connect } from "react-redux";

import ModalBackdrop from "./ModalBackdrop";
import AddTaskModal from "./AddTaskModal"

import * as modalActions from "../actions/modalActions";

const AddTaskButton = ({toggleModalOpen, open}) => (
    <div className="add-task-icon">
        <i className="fas fa-plus-circle" onClick={toggleModalOpen}></i>
        <ModalBackdrop width="50rem" children={<AddTaskModal />}/>
    </div>
);

const mapStateToProps = (state) => {
    return (
        state.modal
    )
}

const mapDispatchToProps = (dispatch) => {
    
    return {
        toggleModalOpen: () => {
            dispatch(modalActions.toggleModalOpen());
        }
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(AddTaskButton);