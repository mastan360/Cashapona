import React from 'react';




class Network extends React.Component{
    constructor(props){
        super(props);
        this.state={
            network:"Network"

        }
    }


    render(){
        return(
            <React.Fragment>{this.state.network}</React.Fragment>
        )
    }
}

export default Network;

