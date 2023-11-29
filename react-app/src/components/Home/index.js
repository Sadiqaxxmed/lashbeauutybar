import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Welcome from "../../images/Welcome.png";
import Logo from "../../images/Logo.png";
import LashesBy from "../../images/LashesBy.png";

import Hours from "../../images/Hours.png";
import Location from "../../images/Location.png";
import Contact from "../../images/Contact.png";

import Policies from "../../images/Policies.png";


import './Home.css'

function Home(){
    return (

        <div className="HP-Main-Div">  

            <div className="HP-Welcome-Div">
                <img src={Welcome} alt="Welcome" className="HP-Welcome-Img"></img>
            </div>

            <div className="HP-Logo-Div">
                <img src={Logo} alt="Logo" className="HP-Logo-Img"></img>
                <img src={LashesBy} alt="LashesBy" className="HP-LashesBy-Img"></img>
            </div>

            <div className="HP-Contact-Div">
                <div className="HP-Hr-Loc-Container">
                    <img src={Hours} alt="Hours" className="HP-Hours-Img"></img>
                    <img src={Location} alt="Location" className="HP-Location-Img"></img>
                </div>
                <div className="HP-Contact-Container">
                    <img src={Contact} alt="Contact" className="HP-Contact-Img"></img>
                </div>
            </div>

            <div className="HP-Policies-Div">
                <img src={Policies} alt="Policies" className="HP-Policies-Img"></img>

            </div>
        </div>

    )
};

export default Home;