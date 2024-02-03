import React from "react";
import FeatherIcon from 'feather-icons-react';

const MoodSelectorCheckInComponent = ({setCheckInStage}) => {
    return (
        <>
        How are you feeling today?
        <div className="flex flex-row p-4 space-x-4">
            <FeatherIcon icon="frown" size="48" fill="red" onClick={() => {console.log('Frowny'); setCheckInStage(1)}} />
            <FeatherIcon icon="meh" size="48" fill="darkorange" onClick={() => {console.log('Mehhy'); setCheckInStage(1)}} />
            <FeatherIcon icon="smile" size="48" fill="green" onClick={() => {console.log('Smiley'); setCheckInStage(1)}} />
        </div>
        </>
    )
}

export default MoodSelectorCheckInComponent;
