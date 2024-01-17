import React from "react";
import { Controller } from "react-bootstrap-icons";
import "./LeftPanel.css";
import Form from "../form/Form";

function LeftPanel() {
  return (
    <div className="left-panel">
      <div className="wrapper">
        <div className="branding">
          <div className="logo">
            <Controller />
          </div>
          <h3>Glitch Realm</h3>
        </div>
        <div className="keywords">
        <p>News</p>
        <p>Reviews</p>
        <p>Hardware</p>
        <p>eSports</p>
        </div>
        <div className="subscribe"> 
        <Form
        placeholder="name@email.com"
        text="Subscribe"
        />
        </div>
        <div className="brand-description">
          <p>
            Welcome to <span>Glitch Realm</span>, your ultimate destination for
            a seamless blend of gaming excellence! Dive into the heart of the
            gaming universe with our expertly curated content, featuring the
            latest game reviews, breaking news, esports updates, insightful game
            development discussions, and in-depth explorations of cutting-edge
            gaming hardware. Whether you're a dedicated gamer or a tech
            enthusiast, <span>Glitch Realm</span> is your go-to source for staying ahead in
            the dynamic world of gaming. Level up your <span>gaming experience</span> with us
          </p>
        </div>
      </div>
    </div>
  );
}

export default LeftPanel;
