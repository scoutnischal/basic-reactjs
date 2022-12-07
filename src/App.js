import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Orange,Watermallion } from "./Apple";
import User from "./User";
import Student from "./Student";
function App() {
  const [data,setData] =useState("Nischal Shakya");
  function click_button(){
    setData("Suni Shakay"+1);
    // alert("function called");
    alert(data);
  }
  console.warn("====================")
  const [name,setName] = useState("nischal");

  return (
    <div className="App">
    {/* we can pass the data ie. Nischal through the props aslo pass the dynamic data */}
    {/* <Student name ={"Nischal"} email = {"nischal@gmail.com"} other = {{address:"ktm", mobile:"123"}}/> */}
    {/* <Student name = {"Hari"} email = {"hari@gmail.com"} other = {{address:"Maru", mobile:"645"}}/>
    <Student name = {"Rita"} email = {"rita@gmail.com"} other = {{address:"Ason", mobile:"897"}}/> */}
    <Student name ={name}/>
    <button onClick={()=>{setName("Ram")}}>Update Name</button>
    {/* ===================================== */}
     <h1>{data}</h1>
     <User />
     {/* <Users /> */}
     {/* no need to export the component */}
     <User />
     <Orange />
     <Watermallion />
     {/* creat a button */}
     {/* <button onClick={click_button}>Click Me</button> */}
     {/*  alternative */}
     <button onClick={()=>click_button()}>Click Me</button>
     <br></br>
     <br></br>
     {/*directly called */}
     <button onClick={()=>alert("This is directly called")} style={{backgroundColor:'red'}}>Call Me</button>
    </div>
  );
}

function Users(){
  return(
      <div>
          <h1>user component</h1>
      </div>
  );
}

export default App;
