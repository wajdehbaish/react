import React from "react";

class CheckBox extends React.Component{
    constructor(props){
        super(props)
this.state={show:false}
    }

    render(){
        return(
            <div className='main'>

            <input type="checkbox" defaultChecked={this.props.show}/>{this.props.text}
           
           
           
          


            </div>
        )
    }
}

export default CheckBox;