import React from "react";
import Input from "./input";
import Select from "./select";
import ButtonSubmit from "./submit";
import TextArea from "./textarea";
import './style.css'


class Form extends React.Component{
    constructor(props){
        super(props)
        this.state={firstName:'',lastName:'',age:'',freeText:'',isReview:false,isSaved:false};
    }
handleSubmit=(e)=>{
e.preventDefault()
console.log(this.state);
this.handleReview()

}

handleReview=()=>{
this.setState({isReview:true})
}

handleFirstName=(e)=>{
this.setState({...this.state,firstName:e.currentTarget.value})
}
handleLastName=(e)=>{
    this.setState({...this.state,lastName:e.currentTarget.value})
}
handleAge=(e)=>{
    this.setState({...this.state,age:e.currentTarget.value})
}
handleFreeText=(e)=>{
    this.setState({...this.state,freeText:e.currentTarget.value})
}
handleBack=()=>{
    console.log('wajde1');
    this.setState({isReview:false})
}
handleSend=()=>{
alert('ur data has been saved _!_')
this.setState({isReview:false})
}

    render(){
        return(
            <div>
            <form className="main" onSubmit={this.handleSubmit}>
       <Input placeholder='enter first name' value={this.state.firstName} onInputChange={this.handleFirstName}/>
       <Input placeholder='enter last name' value={this.state.lastName} onInputChange={this.handleLastName}/>
       <Select placeholder='age' value={this.state.age} onInputChange={this.handleAge}/>
       <TextArea placeholder='enter a free text' value={this.state.freeText} onInputChange={this.handleFreeText}/>
       <ButtonSubmit type='submit' onButtonClick={this.handleSubmitButton}/>
      </form>
       { this.state.isReview==true&&<div className='main2'>
            <p>{this.state.firstName}</p>
            <p>{this.state.lastName}</p>
            <p>{this.state.age}</p>
            <p>{this.state.freeText}</p>
            <ButtonSubmit value='back' onButtonClick={this.handleBack}/>
            <ButtonSubmit value='send survey' onButtonClick={this.handleSend}/>
        </div>}
      </div>
        )
    }
}
export default Form;