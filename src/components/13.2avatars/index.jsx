import React from "react";
import "./style.css";

const randomAvatarApi = "https://randomuser.me/api/?results=10";

class Avatar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { randomAvatar: [], filtedAvatar:[]};
  }

  componentDidMount = async () => {
    let results = await (await fetch(randomAvatarApi)).json();
    this.setState({ randomAvatar: results.results });
  };

  handleChange = (e) => {
    const myInputChange=e.target.value
    const arrFilter= this.state.randomAvatar.filter((randomAvatar)=>{
     return randomAvatar.name.first.includes(myInputChange)
      
    
     })
     console.log(arrFilter);
    this.setState({filtedAvatar:arrFilter})
  };
  render() {
    return (
      <div className="main">
        <input type="text" placeholder="Filter avatars" onChange={this.handleChange}></input>
          {this.state.filtedAvatar.length === 0&& this.state.randomAvatar.map((randomAvatar)=>{
       return  <div><h1>{randomAvatar.name.first} {randomAvatar.name.last}</h1> <img className='img' src={randomAvatar.picture.medium}></img></div>  
          })}
        {this.state.filtedAvatar.map((filtedAvatar)=>{
           return  <div><h1>{filtedAvatar.name.first} {filtedAvatar.name.last}</h1> <img className='img' src={filtedAvatar.picture.medium}></img></div>
        })}
          
       
      </div>
    );
  }
}

export default Avatar;
