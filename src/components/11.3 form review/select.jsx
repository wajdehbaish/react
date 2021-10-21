import React from "react";

class Select extends React.Component{
    buildOptions() {
        var arr = [];

        for (let i = 1; i <= 100; i++) {
            arr.push(<option key={i} value={i}>{i}</option>)
        }

        return arr; 
    }
    render(){
        return(
            <div>
                <select  value={this.props.age} onChange={this.props.onInputChange}>
                {this.buildOptions()}
                
                </select>
            </div>
        )
    }
}
export default Select;

