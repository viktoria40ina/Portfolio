import React from "react";
import "./Footer.css";

export const Footer = () => {
    return (
        <div className="footer">
            <div className="foot">
                <div className="block">
                    <p>Санкт-Петербург</p>
                    <p>Сорокина Виктория</p>  
                </div>
             </div>
            <div className="foot">
                <div className="block">
                    <p>+79291780089</p>
                    <p>viktoriya40inq@mail.ru</p>
                </div>
             </div>
             <div>
                 <h2 className="year">2022</h2>
             </div>
        </div>
    )
}