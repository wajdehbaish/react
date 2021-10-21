import React from "react";


class TextArea extends React.Component{

    render(){
        return(
            <div>
                <textarea value={this.props.freeText} onChange={this.props.onInputChange}></textarea>
            </div>
        )
    }
}
export default TextArea;