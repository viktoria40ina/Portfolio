import React, { Component } from "react";
import {Routes, Route, Navigate} from 'react-router-dom';
import { Routers } from "../Routers";

export const AppRouter = () => {
    return (
        <Routes>  
            {Routers.map(({path, element}) =>
              <Route path={path} element={element}/> 
            )} 
           <Route path="*" element={<Navigate to ="/" />} />
      
        </Routes>
    )
}
