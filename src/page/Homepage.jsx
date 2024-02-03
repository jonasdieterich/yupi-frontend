import React from "react";
import {Link} from "react-router-dom";

const Homepage = () => {
    return (
        <div>Take me to the <Link to={`check-in`}>check-in</Link></div>
    );
}

export default Homepage;
