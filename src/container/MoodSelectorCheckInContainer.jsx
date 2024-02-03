import React from "react";
import MoodSelectorCheckInComponent from "../component/MoodSelectorCheckInComponent";

const MoodSelectorCheckInContainer = ({setCheckInStage}) => {
    return (
        <MoodSelectorCheckInComponent setCheckInStage={setCheckInStage}/>
    )
}

export default MoodSelectorCheckInContainer;
