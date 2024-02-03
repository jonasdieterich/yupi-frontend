import React, {useState} from "react";
import MoodSelectorCheckInContainer from "../container/MoodSelectorCheckInContainer";
import WordSelectorCheckInContainer from "../container/WordSelectorCheckInContainer";
import WellbeingActivitySelectorCheckInContainer from "../container/WellbeingActivitySelectorCheckInContainer";

const CheckInPage = () => {
    const [checkInStage, setCheckInStage] = useState(0);

    return (
        <div className="flex flex-col justify-center items-center text-center">
            {
                {
                    0: <MoodSelectorCheckInContainer setCheckInStage={setCheckInStage}/>,
                    1: <WordSelectorCheckInContainer setCheckInStage={setCheckInStage}/>,
                    2: <WellbeingActivitySelectorCheckInContainer setCheckInStage={setCheckInStage}/>
                }[checkInStage]
            }
        </div>
    );
}

export default CheckInPage;
