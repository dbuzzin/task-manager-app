import React from "react";



const tabsArr = [
    {
        name    : "Assigned",
        class   : "color-assigned",
    },
    {
        name    : "Open",
        class   : "color-open",
    },
    {
        name    : "On Hold",
        class   : "color-hold",
    },
    {
        name    : "Complete",
        class   : "color-complete",
    },
    {
        name    : "Rejected",
        class   : "color-rejected",
    }
]





class Tab extends React.Component {

    state = {

        open: this.props.init
    }


    // Handle changes when tab is clicked.


    handleClick = async () => {

        await this.setState({open: true});
        await this.props.updateOpen(this.props.index);
        await this.props.changeColor(this.props.index);
    }
    

    // Send data to TabList state when each tab mounts.


    componentDidMount = () => this.props.populate(this);





    render() {

        return(
            <div 
            className={`${this.props.class} ${ this.state.open ? "open" : "closed"}`}
            onClick={this.handleClick}
            >
                <div>
                    {this.props.name}
                </div>
            </div>
        );
    }
}





class TabList extends React.Component {

    state = {

        tabs: []
    }


    // Add rendered tabs to state array.


    addTabs = (newTabs) => this.setState(prevState => ({ tabs: [...prevState.tabs, newTabs]}) );


    // Update other tabs when new tab is open.


    updateOpenState = (index) => {

        this.state.tabs.map((tab, i) => {
            if(i !== index) tab.setState({open: false});
            return true;
        });
    }


    // Send colour change to bar.


    sendColorChange = (index) => {

        const newColor = this.state.tabs[index].props.class;
        this.props.onChange(newColor);
    }





    render() {

        const initState = (i) => i === 0 ? true : false;

        return (
            
            <div className="task-display__tabs" onLoad={this.addTabs}>
                { tabsArr.map((tab, i) => <Tab changeColor={this.sendColorChange} 
                                               updateOpen={this.updateOpenState} 
                                               populate={this.addTabs} 
                                               init={initState(i)} 
                                               index={i} 
                                               class={tab.class} 
                                               name={tab.name} />) }
            </div>
        );
    }
}





class TabWrapper extends React.Component {

    state = {

        color: "color-assigned"
    }


    // Change color of bar to match open tab.


    changeColor = (newColor) => {

        this.setState({color: newColor});
    }





    render() {

        return(

            <div>
                <TabList onChange={this.changeColor}/>
                <div className={`task-display__top ${this.state.color} inner-shadow-bottom-tiny`}>
                </div>
            </div>
            
        );
    }
}


export default TabWrapper;