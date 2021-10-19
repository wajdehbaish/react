import React from "react";
import './style.css'

 const RandomJokeEndPoint='https://api.chucknorris.io/jokes/random'
 const categoryJOkesApi='https://api.chucknorris.io/jokes/random?category='
 

class ChuckNorris extends React.Component{
    constructor(props){
    super(props)
    this.state={randomJoke:"",categoryJoke:""}
}

handleClick= async()=>{
let response= await (await fetch(RandomJokeEndPoint)).json()
this.setState({randomJoke:response.value})
}

handleClick1=async(category)=>{
    let categoryJokes= await(await fetch(categoryJOkesApi+category)).json()
    this.setState({categoryJoke:categoryJokes.value})
}

render(){
    return(
        <>
  
        <div className='ztam'>
            <input type='button' value="get a joke" className='btn' onClick={this.handleClick}></input>
      
            <p>{this.state.randomJoke}</p>
            
        </div>
        <div className='ztam2'>
            <input type='button' value='get animal joke' className='btn btn2' onClick={()=>this.handleClick1('animal')}></input>
            <input type='button' value='get music joke' className='btn btn3' onClick={()=>this.handleClick1('music')}></input>
      
            <p>{this.state.categoryJoke}</p>
            </div>
            </>

    )
}
}

export default ChuckNorris;