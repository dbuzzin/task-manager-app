// React Imports

import React, { Component, Fragment } from "react";

// Redux Imports

import { connect, ReactReduxContext } from "react-redux";

import { addTask } from "../actions/taskActions";

// Context Imports

import { ModalContext } from "./contexts/ModalContext";

// Component Imports


// Other Imports

import update from "immutability-helper";



class AddTaskModal extends Component {

    state = {

        newTask: {

            description     : "",
            userAssigned    : "",
            dateAssigned    : Date.now(),
            dateDeadline    : "",
            isOpen          : false,
            important       : false
        }
    }

    static contextType = ReactReduxContext;

    store = this.context.store;

    handleChange = (e) => {

        const newData = update(this.state.newTask, {

            [e.target.name]: { $set: e.target.type === "checkbox" ? e.target.checked : e.target.value }
        });

        this.setState({newTask: newData});

    }

    handleSubmit = (e) => {
                
        e.preventDefault();

        this.props.addTask(this.state.newTask);

    }

    render = () => {

        return (

            <div className="add-task-wrapper">
                <form className="form">
                    <div className="form__top">

                        <div className="form__field column" >

                            <label htmlFor="description">Task Description</label>

                            <textarea name="description" value={this.state.description} placeholder="..." onChange={this.handleChange}></textarea>

                        </div>

                    </div>

                    <div className="form__bottom">

                        <div className="form__field column" >

                            <label htmlFor="userAssigned">Assign To</label>

                            <select name="userAssigned" value={this.state.userAssigned} placeholder="Choose User" onChange={this.handleChange}>

                                <option value="unassigned" defaultValue>Unassigned</option>
                                <option value="user1">User 1</option>
                                <option value="user2">User 2</option>
                                <option value="user3">User 3</option>

                            </select>

                        </div>

                        <div className="form__field column">

                            <label htmlFor="dateDeadline">Due Date</label>
                            
                            <input type="date" value={this.state.dateDeadline} name="dateDeadline" onChange={this.handleChange}/>

                        </div>

                    </div>

                    <div className="form__check">

                        <div className="form__field row">

                            <input type="checkbox" name="important" value={this.state.important} onChange={this.handleChange}/>

                            <label htmlFor="important">Check to mark this task as important.</label>

                        </div>

                    </div>

                    <div className="form__submit">

                        <ModalContext.Consumer>

                            {(context) => (

                                <Fragment>

                                    <button onClick={(e) => context.hideModal(e)}>Cancel</button>

                                    <button onClick={(e) => { this.handleSubmit(e); context.hideModal(e)}}>Assign</button>

                                </Fragment>

                            )}

                        </ModalContext.Consumer>

                    </div>
                </form>
            </div>
            
        );
    }
}



const mapStateToProps = state => ({

    ...state,
})



const mapDispatchToProps = dispatch => ({

    addTask: (task = {}) => dispatch(addTask(task))
})



export default connect(mapStateToProps, mapDispatchToProps)(AddTaskModal);