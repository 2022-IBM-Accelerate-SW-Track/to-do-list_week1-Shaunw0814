import React, { Component } from 'react';
import "./About.css";
import profile_pic from "../assets/profile_pic.jpg";
  
export default class About extends Component {
  render() {
    return (
      <div>

        <div>
          <div class="split left">
            <div className="centered">
              <img 
                className="profile_image"
                src={profile_pic}
                alt="Profile Pic"
                ></img>
            </div>
          </div>
          <div className="split right">
            <div className="centered">
              <div className="name_title">Shaun Wang</div>
              <div className="brief_description">
                Hi! My name is Shaun Wang and I am a rising sophmore studying Computer Science at the University of Florida.
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}