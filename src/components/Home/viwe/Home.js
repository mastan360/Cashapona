import React, { Component } from 'react';



 class Home extends Component {
     constructor(props){
         super(props);
             this.state={
              home:"Home",
             }
             
         
     }

     render(){
         return(
             <React.Fragment>
           
           <button onClick={this.handleChange}>{this.state.home}</button>

             </React.Fragment>)
            
     }
 }
export default Home;
