import React,{useState} from 'react';

export default function ConditonDemo(){
    const [loggedIn,setLoggedIn] = useState(3);
  
    //1,2,3
    return(
        <div style={{textAlign:"center"}}>
        {/* condition ? <expression if true> : <expression if false> */}
            {/* {loggedIn?<h1>Welcome Nischal</h1>:<h1>You are not LogIn</h1>} */}
        {/* if else if condition  */}
        {loggedIn==1?
            <h1>Welcome user1</h1>
            :loggedIn==2?<h1>Welcome user2</h1>
            :<h1>Welcome user3</h1>}
        </div>
    );
}

//example of pass function or component as a props:

export function DemoFun_as_Props(props){
    return(
        <div style={{textAlign:"center"}}> 
            <h1>Hello Nepal</h1>
            <button onClick={()=>props.data()}>Call Data Funtion</button>
        </div>
    );
}