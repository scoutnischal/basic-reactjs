import React,{useState} from 'react';
import Students from './Students';


//eg of functional component
export function Apple(){
    //demo of create component inside component as nested
    //which is only used inside the immediate parent component
    function AppleDemo(){
        return (<div style={{color:"revert-layer"}}>Demo of Component inside Component</div>);
    }
    return(
        <div className="App">
            <h1>This is Apple Page</h1>
            <h1>Simple Apple Demo</h1>
            {30+40}
            <AppleDemo />
        </div>
    );
}

// export default Apple;

//only for single funtion export as a default ie. Apple()

//if we need different function export used:

export function Orange(){
    return(
        <div>
            <h1>this is exmaple Orange</h1>
        </div>
    );
}

export function Watermallion(){
    return(
        <div>
            <h1>this is exmaple Watermallion</h1>
        </div>
    );
}



//example of props in class component:
export class StudentProps extends React.Component{
    constructor(){
        super();
        this.state={name:"Nischal"}
    }
    render(){
        return (
            <div className='StudentProps'>
                <Students name = {this.state.name} email= "urmila@gmail.com"/>
                <Students name={["This is ", <strong> not </strong>,  "working."]}/>
                {/* <Students name = "Jhuna" email= "moti@gmail.com"/> */}
                <button onClick={()=>this.setState({name:"Sirish shakya"})}>Update Name</button>
            </div>
        );
    }
}
//example of Form print data
export function FormDemo(){
const [data,setData] = useState(null);
const [print,setPrint] = useState(false);
    function getData(val){
        console.log(val.target.value);
        setData(val.target.value);
    }
    return (
        <div>
            <h1>Get Input From box value:</h1>
            {
                print?
                <h1>{data}</h1>
                :null
            }
            <input type="text" onChange={getData}></input>
            <button onClick={()=>setPrint(true)}>Print Data</button>
        </div>
    );
}
//hide ,show and troggle demo
export function HideShow(){
    const [status,setStatus] = useState(true);
    return(
        <div>
            {status?
                <h1>This is Hide and Show Example</h1>
            :null}
            <button onClick = {()=>setStatus(false)}>Hide</button>
            <button onClick = {()=>setStatus(true)}>Show</button>
            {/* create a toggle button */}
            <button onClick={()=>setStatus(!status)}>Toggle</button>
         </div>
    );
}

//example of form:
export function FormHandle(){
    const [name,setName] = useState("");
    //tnc for terms and conditions
    const [tnc,setTnc] = useState(false);
    const [interest,setInterest] = useState("");

    function getFormData(e){
        //help to stop default form submittion
        console.warn(name,tnc,interest);
        e.preventDefault();
    }
    return(
        <div style={{textAlign:"center"}}>
            <h1>Welcome to Form Handle in React</h1>
            <form onSubmit={getFormData}>
                <input type="text" placeholder='enter name' value={name} 
                onChange={(e)=>setName(e.target.value)}/> <br/><br/>
                <select onChange={(e)=>setInterest(e.target.value)}>
                    <option>Select Options</option>
                    <option>Marvel</option>
                    <option>DC</option>
                    <option>Anime</option>
                </select><br/><br/>
                <input type="checkbox" onChange={(e)=>setTnc(e.target.checked)}/>
                <span>Accept Terms and Conditions</span><br/><br/>
                <button type="submit">Submit</button> <br/><br/>
                <input type="reset" value="Reset"/>
            </form>
        </div>);
}

//Demo Basic Form Validation in react:
export function Login(){

    const [user,setUser] = useState("");
    const [pass,setPass] = useState("");
    const [userErr,setUserErr] = useState(false);//user id error
    const [passErr,setPassErr] = useState(false);//user password error

    function loginHandle(e){
        // alert("hello");
        {user.length<3 || pass.length<3 ? alert("type correct values"):alert("Thank you for submit")}
        e.preventDefault();
    }

    function userHandler(e){
        //check the logic state is true or not?
        let id = e.target.value;//get the data from input box
        {
            id.length<3?setUserErr(true):setUserErr(false);
            setUser(id);
        }
        console.log(e.target.value.length);
    }
    function passHandler(e){
        let pass = e.target.value;
        {
            pass.length<3?setPassErr(true):setPassErr(false);
            setPass(pass);
        }
    }
    return (
        <div  style={{textAlign:"center"}}>
            <h1>Basic Form Validation in React</h1>
            <h1>LogIn</h1>
            <form onSubmit={loginHandle}>
             User ID:<input type="text" placeholder='User ID' onChange={userHandler}/>
             {userErr?<span>User not valid</span>:""}
             <br/><br/>
             Password:<input type="password" placeholder='User Password' onChange={passHandler}/>
             {passErr?<span>Password not valid</span>:""}
             <br/><br/>
             <button type="submit">Login</button>
            </form>
        </div>
    );
}
