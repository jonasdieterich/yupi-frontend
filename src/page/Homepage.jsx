import React from "react";
import {Link} from "react-router-dom";

const Homepage = () => {
    return (
        <div className="flex justify-center items-center text-center">
            Take me to the&nbsp;<Link class="text-teal-500" to={`check-in`}>check-in</Link>
        </div>
    );
}

export default Homepage;
