import React, { useState, useEffect, useRef } from "react";
import { UserDropdownContainer, UserDropdownMenu } from "./UserDropdown.styled";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Avatar from '@mui/material/Avatar';


const UserDropdown = () => {


    const [isOpen, setIsOpen] = useState<boolean>(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const closeDropdown = () => {
        setIsOpen(false);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            closeDropdown();
        }
    };

    useEffect(() => {
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    
    return (
        <div ref={dropdownRef}>
            <UserDropdownContainer onClick={() => setIsOpen(!isOpen)}>
                <Avatar>DM</Avatar>
                <p>Dea Marielle</p>
                <ArrowDropDownIcon />
                {
                    isOpen && (
                        <UserDropdownMenu>
                            <ul>
                                <li>Logout</li>
                            </ul>
                        </UserDropdownMenu>
                    )
                }
            </UserDropdownContainer>
        </div>

    )
}

export default UserDropdown