import React from "react";
import { connect } from "react-redux";

import * as taskActions from "../actions/taskActions";
import * as modalActions from "../actions/modalActions";

const AddTaskModal = ({users, newTask, updateFormData, addNewTask, toggleModalClose}) => (
    <div className="add-task-wrapper">
        <div className="form">
            <div className="form__top">
                <div className="form__field column" >
                    <label htmlFor="description">Task Description</label>
                    <textarea name="description" value={newTask.description} placeholder="..." onChange={updateFormData}></textarea>
                </div>
            </div>
            <div className="form__bottom">
                <div className="form__field column" >
                    <label htmlFor="userAssigned">Assign To</label>
                    <select name="userAssigned" value={newTask.userAssigned} placeholder="Choose User" onChange={updateFormData}>
                        <option value="unassigned" defaultValue>Unassigned</option>
                        {users.map(user => (
                            <option key={user.id} value={user.name}>{user.name}</option>
                        ))}
                    </select>
                </div>
                <div className="form__field column">
                    <label htmlFor="deadline">Due Date</label>                            
                    <input type="date" name="deadline" onChange={updateFormData}/>
                </div>
            </div>
            <div className="form__check">
                <div className="form__field row">
                    <input type="checkbox" name="important" onChange={updateFormData}/>
                    <label htmlFor="important">Check to mark this task as important.</label>
                </div>
            </div>
            <div className="form__submit">
                <button onClick={toggleModalClose}>Cancel</button>
                <button onClick={() => {
                    addNewTask(newTask);
                    toggleModalClose();
                }}>Assign</button>
            </div>
        </div>
    </div>
);

const mapStateToProps = (state, ownProps) => {
    return {
        users: state.users,
        newTask: state.newTask
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {

    return {
        updateFormData: (e) => {
            dispatch(taskActions.updateFormData(e.target));
        },
        addNewTask: (newTask) => {
            dispatch(taskActions.addNewTask(newTask));
        },
        toggleModalClose: () => {
            dispatch(modalActions.modalFadeDelay())
        }
        
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTaskModal);