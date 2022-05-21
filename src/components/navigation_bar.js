import {react, useState, useEffect} from "react";
import {Link, Outlet} from "react-router-dom";

const NavigationBar = () => {
    return (
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="all">All Quotes</Link>
                <Outlet />
            </nav>
        </div>
    );
}

export default NavigationBar;