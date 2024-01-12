import { Component } from "react";
import "./App.css"
import elephant from "./images/elephant.jpeg";
import "./style.css";

export default class AppClass extends Component{
  constructor(props){
    super(props);
  }
  render() {
    const {name} = this.props;

    return (
      <div>
        <h1 style={{textAlign:"center"}}>Kalvium Gallary</h1>
        <div className="main-container">
          {name.map((ele, idx, data) =>{
            return (
              <div key={ele.id}>
                <img src={ele.img} alt="" />
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // code here
}
