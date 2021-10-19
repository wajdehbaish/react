import React from "react";
import './style.css'
class MyBox extends React.Component{
    constructor(props){
    super(props)
    this.state={ show: false };

    }
    componentDidMount() {
        setTimeout(() => {
          this.setState({ show:!this.state.show });
        }, 1000);

       
      }
      componentDidUpdate(){
        setTimeout(() => {
            this.setState({ show: !this.state.show });
          }, 4000);
      }
         render(){
         return(
             <div style={{display: this.state.show ? 'block': 'none'}} className='box'>
                 <div className='box1 box'></div>
                 <div className='box2 box'></div>
                 <div className='box3 box'></div>
             </div>
         )
         }
}
export default MyBox;