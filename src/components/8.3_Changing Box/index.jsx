import React from "react";
import './style.css'

class ColorBox extends React.Component{
    constructor(props){
    super(props)
    this.state={show: false}
    }
    
    componentDidMount(){
        setTimeout(() => {
            this.setState({show:!this.state.show})
        }, 2500);
    }
    
      render(){
          return (
              <div style={{borderRadius: this.state.show ? '100%': '0%'}} className='box'>

              </div>
          )
      }
}
export default ColorBox;