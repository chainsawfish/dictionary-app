import React from 'react';
import {Link} from "react-router-dom";
import starYellow from "../assets/star-yellow.svg";

const NavTop = () => {
    return (
        <div
            className="flex col p-2 w-full justify-between align-middle h-[50px] bg-blue-500 text-2xl font-semibold text-white">
            <Link to="/">BIG Dictionary</Link>
            <Link to="/favorites" className="flex col items-center p-2">
                <img src={starYellow} alt="starred" className="p-1" width="30px"/>
                <span>Favorite words</span>
            </Link>
        </div>
    );
};

export default NavTop;