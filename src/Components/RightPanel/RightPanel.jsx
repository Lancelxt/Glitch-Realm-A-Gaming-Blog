import React from "react";

import "./RightPanel.css";
import Form from "../form/Form";
import giveaway from "../../assets/giveaway.png"
import { Controller, Facebook, Github, Linkedin, Twitter, Youtube } from "react-bootstrap-icons";

function RightPanel() {
  return (
    <div className="right-panel">
      <div className="wrapper">
        
        <div className="search"> 
        <Form
        placeholder="Type Something"
        text="Search"
        />
        </div>
        <div className="featured">
            <h3>Featured In</h3>
            <div>
            <figure> <Controller/> </figure>
                <p>A Comprehensive Guide to Optimizing Your Gaming Rig for Maximum Performance
                </p>
                </div>
            <div>
                <figure> <Controller/> </figure>
                <p>The Top Game Reviews of 2024 You Can't Miss
                </p>
                </div>
            <div>
               <figure> <Controller/> </figure>
                <p>Inside CS:GO Esports: A Closer Look at the Thriving Competitive Scene</p>
                </div>
            </div>
            <div className="social-handels">
                <Twitter/>
                <Facebook/>
                <Github/>
                <Linkedin/>
                <Youtube/>
                </div>      
      </div>
      <div className="secondary">
      <div className="wrapper">
              <img src={giveaway} alt="giveaway" />
              <p>Participate and get a free Counter Strike 2 Knife</p>
              <button>Participate</button>
              </div>
      </div>
    </div>
  );
}

export default RightPanel;
