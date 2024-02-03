import React from "react";

const WordSelectorCheckInComponent = ({moodOptions, moods, setMoods, setCheckInStage}) => {
    return (
        <div className="flex flex-col">
            Which words best describe your mood? (max 3)
            <div className="flex flex-wrap items-start justify-center p-5 py-10">
            {moodOptions.map(moodOption => {
                return (
                    <div className={`m-2 text-gray-800 font-semibold py-2 px-4 border border-purple-400 rounded
                                    shadow ${(!moods.includes(moodOption) ? 'bg-white hover:bg-purple-100' : 'bg-purple-400')}`}
                        onClick={() => {
                            if (!moods.includes(moodOption) && moods.length < 3) {
                                setMoods(moods => [...moods, moodOption])
                            } else {
                                setMoods(moods => moods.filter(mood => mood !== moodOption))
                            }
                        }}>
                        {moodOption}
                    </div>
                )
            })}
            </div>
            <div className={`mt-4 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded
                            shadow ${(3 >= moods.length && moods.length > 0) ? 'bg-gray-400' : 'bg-white'}`}
                 onClick={() => {if (3 >= moods.length && moods.length > 0) {setCheckInStage(2)}}}>
                Mood.
            </div>
        </div>
    );
}

export default WordSelectorCheckInComponent;
