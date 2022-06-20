import React from "react";
import "./WebItem.css";
import { Card } from "react-bootstrap";
import Image from "react-bootstrap/Image"; 
import { Button } from "react-bootstrap";
import { NavLink } from 'react-router-dom';


export const WebItem = ({image, title, id, description}) => {
    return (
        <div className="webItem">
            <Card >
                <div>
                  <p>{title}</p>
                </div> 
                <div className="descr">{description}</div> 
                {/* как сделать нормальный переход на стр c проектом по id? или там нужно по названию? но в любом случае у меня не получилось */}
                <div className="but">
                    <NavLink to="/"><Button className="button"> СМОТРЕТЬ </Button></NavLink> 
                </div>
               <Image src={image} className="webImg"/> 
            </Card>
        </div>
    )
}
