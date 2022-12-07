import React from "react";
import ReactDOM  from "react-dom";
import './index.css';
import App from "./App";
import {Apple,StudentProps,FormDemo,HideShow,FormHandle,Login} from "./Apple";
// import { Apple,Orange,Watermallion } from "./Apple";
import reportWebVitals from './reportWebVitals';
import {Data_fun} from './Students';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Apple /> */}
    {/* <StudentProps/> */}
    {/* <FormDemo/> */}
    {/* <HideShow/> */}
    {/* <FormHandle/> */}

    {/* =================== */}
    {/* example of conditions */}
    {/* <ConditonDemo /> */}

      {/* =================== */}
    {/* Basic Form Validation in React */}
    {/* <Login/> */}

      {/* =================== */}
    {/* Example of function as a props in React*/}
    <Data_fun/>
  </React.StrictMode>,
  document.getElementById('root')

);
reportWebVitals();