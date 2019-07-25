import React, { Component } from 'react';

class Form extends Component {
    state = { 
        firstName: "Siya",
        lastName: "Kotwal"
     }

     handleFirstNameChange = event => {
         this.setState({
             firstName: event.target.value
         })
     }

     handleLastNameChange = event => {
         this.setState({
             lastName: event.target.value
         })
     }
    render() { 
        return ( 
            <form>
                <input type="text" onChange={event => this.handleFirstNameChange(event)} id="firstName" value={this.state.firstName}>
                </input>
                <input type="text" id="lastName" onChange={event => this.handleLastNameChange(event)} value={this.state.lastName}></input>
            </form>
         );
    }
}
 
export default Form;