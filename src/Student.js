function Student(props){
    //recieved the data through props 
    //we can print the data using props.name
    console.warn(props);
    return(
        <div style={{backgroundColor: "green"}}>
            <h1>Student Component</h1>
            <h1>Hello {props.name}</h1>
            {/* <h1>Email : {props.email}</h1>
            <h3>Address : {props.other.address}, Mobile : {props.other.mobile}</h3> */}
        </div>
    );
}

export default Student;