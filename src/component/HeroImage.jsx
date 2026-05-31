import React from "react";
import profileAvatar from "../assets/images/profile.svg";

export default function HeroImage() {
    return (
        <div className="sm:w-25">
            <img src={profileAvatar} alt="profile" className="w-50 sm:12.5 md:w-25" />
        </div>
    )
}

