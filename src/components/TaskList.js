import React, { Component } from "react";

import { connect, ReactReduxContext } from "react-redux";



class TaskStarIcon extends Component {



    state = {

        open: this.props.isOpen,
        hold: false
    }



    render() {

        return(

            <div className={`task__body-star ${this.state.open ? "star-active" : "star-inactive"}`}>
                <i className="fas fa-star"></i>
            </div>
        );
    }
}



const TaskDateIcon = () => {

    return(

        <div className="task__body-date">
            <i className="far fa-calendar-alt"></i>
        </div>
    );
}



// class TaskDateModal extends Component {

//     render() {

//         return(


//         );
//     }    
// }



class Task extends Component {

    state = {

        status: {

            open        : this.props.isOpen,
            hold        : false,
            important   : this.props.important
        }
    }

    render() {

        return(

            <div className="task inner-shadow-bottom-tiny">


                <div className="task__complete closed">
                <div className="closed">Complete</div>
                </div>
                

                <div className="task__body">

                <div className="task__body-top">
                    <div className="task__body-desc">
                    {this.props.desc}
                    </div>
                    <TaskStarIcon isOpen={this.props.isOpen}/>
                </div>
                
                <div className="task__body-bottom">
                    <div className="task__body-user">
                    <i className="fas fa-user-circle"></i>
                    <span className="user-name">{this.props.assignedTo}</span>
                    </div>
                    <TaskDateIcon />
                </div>

                </div>


                <div className={`${ this.state.status.important ? "task__inactive" : "task__reject"} closed`}>
                <div className="">Reject</div>
                </div>

            </div>
        );
    }
}



class TaskList extends Component {

    state = {   

        tasks: []
    }

    static contextType = ReactReduxContext;

    store = this.context.store;

    componentDidMount = () => {

        setInterval(() => this.setState({tasks: [...this.store.getState().tasks]}), 1000);
    }


    render() {

        return(

                <div className="task-display__main">
                    { this.state.tasks.map((task, index) => (

                        <Task desc={task.description} 
                                    assignedTo={task.userAssigned}
                                    isOpen={task.isOpen}
                                    important={task.important} />

                    ))}
                </div>


        );
    }
}



export default connect()(TaskList);