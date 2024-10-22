import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import './ProfileMenu.css';

const ProfileMenu = () => {
    const { user, isAuthenticated, logout } = useAuth0();
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(prev => !prev);
        console.log("Dropdown toggled:", !isDropdownOpen); // Debugging log
    };

    // Close dropdown if clicked outside
    const handleClickOutside = (event) => {
        if (event.target.closest('.profile-menu-container') === null) {
            setDropdownOpen(false);
            console.log("Dropdown closed"); // Debugging log
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    if (!isAuthenticated) {
        return null; // Don't display anything if the user is not authenticated
    }

    return (
        <div className="profile-menu-container">
            <button className="profile-button" onClick={toggleDropdown}>
                <img src={user.picture} alt={user.name} className="profile-picture" />
            </button>
            {isDropdownOpen && (
                <div className="dropdown-menu">
                    <h2>Welcome, {user.name}!</h2>
                    <p>Email: {user.email}</p>
                    <button onClick={() => logout({ returnTo: window.location.origin })}>
                        Log Out
                    </button>
                </div>
            )}
        </div>
    );
};

export default ProfileMenu;
