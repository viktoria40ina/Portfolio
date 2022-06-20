import React from "react";
import { WebItem } from "../Components/WebItem/WebItem";
import { WebList } from "../Components/WebItem/WebList";


export const Web = () => {
    return (
        <div className="web">
            {WebList.map(({image, title, description}) =>
              <WebItem image={image} title={title} description={description} />
            )}
        </div>
    )
}