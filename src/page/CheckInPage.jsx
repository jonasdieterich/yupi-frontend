import React, {useState} from "react";
import MoodSelectorCheckInContainer from "../container/MoodSelectorCheckInContainer";
import WordSelectorCheckInContainer from "../container/WordSelectorCheckInContainer";
import WellbeingActivitySelectorCheckInContainer from "../container/WellbeingActivitySelectorCheckInContainer";
import FeatherIcon from "feather-icons-react";

const CheckInPage = () => {
    const [checkInStage, setCheckInStage] = useState(0);

    return (
        <div className="flex flex-col">
            { checkInStage > 0 && (
                <div className="flex flex-row p-4 pl-0" onClick={() => {setCheckInStage(prev => prev - 1)}}>
                    <FeatherIcon icon="arrow-left" />
                    Back
                </div>
            )}
            <div className="flex flex-col justify-center items-center text-center m-auto">
                {
                    {
                        0: <MoodSelectorCheckInContainer setCheckInStage={setCheckInStage}/>,
                        1: <WordSelectorCheckInContainer setCheckInStage={setCheckInStage}/>,
                        2: <WellbeingActivitySelectorCheckInContainer setCheckInStage={setCheckInStage}/>
                    }[checkInStage]
                }
            </div>
        </div>
    );
}

export default CheckInPage;
