import React from 'react';

const Sidebar = () => {
    return (
        <nav className="sidebar">
            <ul>
                <li><a href="#">Profile</a></li>
                <li><a href="#">Messages</a></li>
                <li><a href="#">News</a></li>
                <li><a href="#">Music</a></li>
                <li><a href="#">Setting</a></li>
            </ul>
        </nav>
    );
};

export default Sidebar;