import React from "react";
import "./Header.css";
import { NavLink } from 'react-router-dom';

export const Header = () => {
    return (
        <div className="header">
        <nav className="menu">
          <ul>
            <div className="title">СОРОКИНА ВИКТОРИЯ</div>
            <li>
            <NavLink to="/Art" className="link">ИЛЛЮСТРАЦИЯ</NavLink>
            </li>
            <li>
            <NavLink to="/Web" className="link">ВЕБ-ДИЗАЙН</NavLink>
            </li>
            <li>
            <NavLink to="/Education" className="link">ОБРАЗОВАНИЕ</NavLink>
            </li>
            <li>
            <NavLink to="/Contacts" className="link">КОНТАКТЫ</NavLink>
            </li>
          </ul>
        </nav>
        </div>
    )
}