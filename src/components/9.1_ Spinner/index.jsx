import React from "react";
import Spinner from "./spinner";
class MySpinner extends React.Component{
    constructor(props){
    super(props)
    this.state={show: false}
    }
    
    componentDidMount(){
        setTimeout(() => {
            this.setState({show:!this.state.show})
        }, 4000);
    }
    
      render(){
          return (
             <div> 
              <div style={{display: this.state.show ? 'none': 'block'}} className='loader'><Spinner/></div>
              <div style={{display: this.state.show ? 'block': 'none'}} className='data'>here is my data</div>

             
              </div>
          )
      }
}
export default MySpinner;