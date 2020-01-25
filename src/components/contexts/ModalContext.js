import React, { Component } from "react";

const ModalContext = React.createContext();

class ModalProvider extends Component {

	state = {

		showModal: false
	}

	showModal = () => {

		this.setState({
			showModal: true
		});
	}

	hideModal = (e) => {

		e.preventDefault();

		this.setState({
			showModal: false
		});
	}

	render = () => {

		return (

			<ModalContext.Provider value = {
				{

					state: this.state,

					showModal: this.showModal,

					hideModal: this.hideModal,

				}
			} >

			{
				this.props.children
			}

			</ModalContext.Provider>
		);
	}
}

export {
	ModalProvider,
	ModalContext
};