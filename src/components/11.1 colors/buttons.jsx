import React from "react";
class Buttons extends React.Component{
    constructor(props){
    super(props)
}

render(){
    return(
        <input style={{backgroundColor:this.props.color}} type='button' value={this.props.color} className='color1' onClick={()=> {this.props.onColorClick(this.props.color)}}
        ></input>
    )
}

}

export default Buttons;