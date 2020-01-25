import React, { Component } from "react";

import { ModalBackdrop } from "./Modal";
import AddTaskModal from "./AddTaskModal"

import { ModalContext } from "./contexts/ModalContext"



class AddTaskButton extends Component {

    static contextType = ModalContext;

    render = () => {

        return (
    
                <div className="add-task-icon">

                    <i onClick={this.context.showModal} className="fas fa-plus-circle"></i>

                    <ModalBackdrop show={this.context.state.showModal} hide={this.context.hideModal} children={<AddTaskModal />} width="50rem"/>

                </div>

        );
    }
}

export default AddTaskButton;