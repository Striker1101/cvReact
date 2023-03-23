import React from "react";
import "./style.css";
import picture from "../assets/picture.jpeg";
import Formprofile from "./Formprofile";

export default class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      item: {
        img: picture,
        name: "Kelly White",
        obj: "Any objectives",
      },
      toggle: false,
    };
    this.display = this.display.bind(this);
    this.handleChangeObj = this.handleChangeObj.bind(this);
    this.handleChangeText = this.handleChangeText.bind(this);
  }
  display() {
    this.setState({
      toggle: !this.state.toggle,
    });
  }
  handleChangeText = (e) => {
    this.setState({
      item: {
        img: this.state.item.img,
        name: e.target.value,
        obj: this.state.item.obj,
      },
    });
  };
  handleChangeObj = (e) => {
    this.setState({
      item: {
        img: this.state.item.img,
        name: this.state.item.name,
        obj: e.target.value,
      },
    });
  };
  render() {
    return (
      <>
        <div className="profile" onClick={this.display}>
          <img
            src={this.state.item.img}
            alt="profile"
            className="profileImage"
          />
          <div className="profileCover">
            <div className="profileText">
              <h2> {this.state.item.name}</h2>
              <p>{this.state.item.obj}</p>
            </div>
          </div>
        </div>
        {this.state.toggle && (
          <Formprofile
            item={this.state.item}
            text={this.handleChangeText}
            obj={this.handleChangeObj}
          />
        )}
      </>
    );
  }
}
