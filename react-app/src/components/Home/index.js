import React from "react";

import Welcome from "../../images/Welcome.png";

import Lashes from "../../images/Lashes.png";

import HrConLoc from "../../images/HrConLoc.png";

import Policies from "../../images/Policies.png";

import PrepareAppt from "../../images/PrepareAppt.png";
import Ready from "../../images/Ready.png";
import LashGirls from "../../images/LashGirls.png";
import ChooseService from "../../images/ChooseService.png";

import VolFull from "../../images/VolFull.png";
import VolFill from "../../images/VolFill.png";
import WVolFull from "../../images/WVolFull.png";
import WVolFill from "../../images/WVolFill.png";
import VolMegaFull from "../../images/VolMegaFull.png";
import MegaVolFill from "../../images/MegaVolFill.png";
import AddOn from "../../images/AddOn.png";
import LashRemoval from "../../images/LashRemoval.png";
import LashBath from "../../images/LashBath.png";
import LashAfterCare from "../../images/LashAfterCare.png";


import './Home.css'

function Home() {
    return (

        <div className="HP-Main-Div">  

            <div className="HP-Welcome-Div">
                <img src={Welcome} alt="Welcome" className="HP-Welcome-Img"></img>
            </div>

            <div className="HP-Logo-Div">
                <img src={Lashes} alt="Lashes" className="HP-Lashes-Img"></img>
            </div>

            <div className="HP-Contact-Div">
                <img src={HrConLoc} alt="HrConLoc" className="HP-HrConLoc-Img"></img>
            </div>

            <div className="HP-Policies-Div">
                <img src={Policies} alt="Policies" className="HP-Policies-Img"></img>
            </div>

            <div className="HP-Prepare-Div">
                <img src={PrepareAppt} alt="PrepareAppt" className="HP-PrepareAppt-Img"></img>
            </div>

            <div className="HP-Ready-Div">
                <img src={Ready} alt="Ready" className="HP-Ready-Img"></img>
            </div>

            <div className="HP-LashGirls-Div">
                <img src={LashGirls} alt="LashGirls" className="HP-LashGirls-Img"></img>
            </div>

            <div className="HP-ChooseService-Div">
                <img src={ChooseService} alt="ChooseService" className="HP-ChooseService-Img"></img>
            </div>

            <div className="HP-VolFull-Div">
                <img src={VolFull} alt="VolFull" className="HP-VolFull-Img"></img>
                <img src={VolFill} alt="VolFill" className="HP-VolFill-Img"></img>
                <img src={WVolFull} alt="WVolFull" className="HP-WVolFull-Img"></img>
                <img src={WVolFill} alt="WVolFill" className="HP-WVolFill-Img"></img>
                <img src={VolMegaFull} alt="VolMegaFull" className="HP-VolMegaFull-Img"></img>
                <img src={MegaVolFill} alt="VolMegaFill" className="HP-VolMegaFill-Img"></img>
                <img src={AddOn} alt="AddOn" className="HP-AddOn-Img"></img>
                <img src={LashRemoval} alt="LashRemoval" className="HP-LashRemoval-Img"></img>
                <img src={LashBath} alt="LashBath" className="HP-LashBath-Img"></img>
                <img src={LashAfterCare} alt="LashAfterCare" className="HP-LashAfterCare-Img"></img>
            </div>
        </div>

    )
};

export default Home;