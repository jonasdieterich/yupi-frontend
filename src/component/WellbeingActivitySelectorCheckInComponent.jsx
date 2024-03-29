import React from "react";
import {Link} from "react-router-dom";

const WellbeingActivitySelectorCheckInComponent = ({wellbeingActivityOptions}) => {
    return (
        <div className="flex flex-col">
            What do you need today?
            <div className="flex flex-wrap items-start justify-center p-5 py-10">
                {wellbeingActivityOptions.map(wellbeingActivityOption => {
                    return (
                        <Link to="/activity-booking">
                            <div className='m-2 bg-white text-gray-800 font-semibold py-2 px-4 border border-purple-400 rounded
                                    shadow hover:bg-purple-100'>
                                {wellbeingActivityOption}
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default WellbeingActivitySelectorCheckInComponent;
