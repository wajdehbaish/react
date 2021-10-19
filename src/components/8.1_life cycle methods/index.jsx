import React from "react";



class ChangeColor extends React.Component{
    constructor(props){
    super(props)
    this.state={
        favoriteColor:'blue'
    }
}
componentDidMount = () => {
    setTimeout(() => {
      this.setState({ favoriteColor: "red" });
    }, 1000);
  };


render() {
    return (
      <div>
        <h1>My favorite color is {this.state.favoriteColor}</h1>
        <div id="CurColor" ></div>
      </div>
    );
  }
  componentDidUpdate(state) {
    console.log(state);
    const CurColor = document.querySelector("#CurColor");
    CurColor.innerHTML = `The updated favorite color is ${this.state.favoriteColor}`;
  }
}

export default ChangeColor;