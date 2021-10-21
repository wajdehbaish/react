import React from "react";
import Buttons from "./buttons";
import './style.css'


class Color extends React.Component{
    constructor(props){
    super(props)
    this.state={color: ''}
    }

onColorClick=(c)=>{
    this.setState({color:c})
}
 render(){
     return( <div className='main'>
         
         <Buttons  onColorClick={this.onColorClick} color='red'/>
         <Buttons onColorClick={this.onColorClick} color='blue'/>
         <Buttons onColorClick={this.onColorClick} color='yellow'/>
         <p>the color is: {this.state.color}</p>
         </div>
     )
 }
}
export default Color;