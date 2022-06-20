import React from "react";
import { ArtList } from "../Components//ArtItem/ArtList";
import { ArtItem } from "../Components/ArtItem/ArtItem";

export const Art = () => {
    return (
        <div className="art">
            {ArtList.map(({image, title}) =>
              <ArtItem image={image} title={title} />
            )} 
        </div>
    )
}