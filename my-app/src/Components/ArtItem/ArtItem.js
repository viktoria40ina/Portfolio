import React from "react";
import "./ArtItem.css";
import { Card } from "react-bootstrap";
import Image from "react-bootstrap/Image";

export const ArtItem = ({image, title}) => {
    return (
        <div className="artItem">
            <Card >
               <Image src={image} className="artImg"/> 
               <div>
                  <p>{title}</p>
                </div> 
            </Card>
        </div>
    )
}
