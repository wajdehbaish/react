import React from "react";

class ButtonSubmit extends React.Component{

    render(){
        return(
            <div>
                <input value={this.props.value} onClick={this.props.onButtonClick} type='submit'></input>
            </div>
        )
    }
}
export default ButtonSubmit;