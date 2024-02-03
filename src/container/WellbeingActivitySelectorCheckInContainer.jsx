import React from "react";
import WellbeingActivitySelectorCheckInComponent from "../component/WellbeingActivitySelectorCheckInComponent";

const WellbeingActivitySelectorCheckInContainer = () => {
    const wellbeingActivityOptions = ["Yoga", "Therapy", "Workout", "Meditation", "Friend"];
    return (
        <WellbeingActivitySelectorCheckInComponent wellbeingActivityOptions={wellbeingActivityOptions} />
    );
}

export default WellbeingActivitySelectorCheckInContainer;