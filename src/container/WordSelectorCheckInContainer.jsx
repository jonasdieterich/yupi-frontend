import React, {useState} from "react";
import WordSelectorCheckInComponent from "../component/WordSelectorCheckInComponent";

const WordSelectorCheckInContainer = ({setCheckInStage}) => {
    const moodOptions = ["Agitated", "Aggravated", "Bitter", "Contempt", "Cynical", "Disdain", "Disgruntled",
        "Disturbed", "Edgy", "Exasperated", "Frustrated", "Furious", "Grouchy", "Hostile", "Impatient", "Irritated",
        "Irate", "Moody", "On edge", "Outraged", "Pissed", "Resentful", "Upset", "Vindictive"];
    const [moods, setMoods] = useState([]);

    return (
        <WordSelectorCheckInComponent moodOptions={moodOptions} moods={moods} setMoods={setMoods}
                                      setCheckInStage={setCheckInStage} />
    );
}

export default WordSelectorCheckInContainer;