import React from "react";

class Input extends React.Component{



    render(){
        return(
            <div>
                <input type='text' placeholder={this.props.placeholder} value={this.props.firstName} onChange={this.props.onInputChange}></input>
            </div>
        )
    }
}
export default Input;