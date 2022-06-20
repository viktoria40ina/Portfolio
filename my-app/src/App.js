import React from "react";
import { BrowserRouter} from 'react-router-dom';
import { AppRouter } from "./Components/AppRouter";
import {Header} from "./Components/Header/Header";
import {Footer} from "./Components/Footer/Footer";



function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
      </div>
      <AppRouter />
      <div><Footer/></div>
    </BrowserRouter>
  );
}

export default App;

