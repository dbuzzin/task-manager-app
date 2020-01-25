import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";



class ModalBackdrop extends Component {

    state = {

        openClass   : "modal-backdrop",

        isOpen      : this.props.show
    }

    applyClass = (newClass) => setTimeout(() => this.setState(prevState => ({ ...prevState, openClass: `${prevState.openClass} ${newClass}` })), 10);

    removeClass = () => this.setState({openClass: "modal-backdrop"});

    componentDidUpdate = (prevProps) => {

        if(this.props.show !== prevProps.show) {
   
            if(this.props.show) {

                this.applyClass("modal-open");
                this.setState({isOpen: this.props.show});

            } else {

                this.applyClass("modal-fade");

                setTimeout(() => {
                    
                    this.setState({isOpen: this.props.show})
                    this.removeClass();

                }, 1000);
            }
        }
    }

    render = () => {

        if(!this.state.isOpen) {

            return null;

        } else {

            return ReactDOM.createPortal(

                <Fragment>
                
                    <div className={this.state.openClass}>
                        
                        <div className="modal-backdrop__window" style={{width: this.props.width}}>

                            <span onClick={this.props.hide} className="modal-backdrop__window-closebtn">&times;</span>

                            {this.props.children}
                        </div>

                    </div>

                </Fragment>

                ,
                document.body
            );
        }
    }
}

export { ModalBackdrop };