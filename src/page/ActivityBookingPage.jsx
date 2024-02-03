import React from "react";
import {InlineWidget} from "react-calendly";

const ActivityBookingPage = () => {
    return (
        <div className="m-auto">
            <InlineWidget url="https://calendly.com/jonasdieterich/30min" styles={{height: '820px'}}/>
        </div>
    );
}

export default ActivityBookingPage;
