import { getNextKeyDef } from '@testing-library/user-event/dist/keyboard/getNextKeyDef';
import React from 'react';
import {DemoFun_as_Props} from './ConditionDemo';
export default class Students extends React.Component{
    render(){
        console.log(this.props);
        return(
            <div style={{alignContent:'-moz-initial'}}>
               Student {this.props.name},<br></br>
               {/* Email: {this.props.email} */}
            </div>
        );
    }
}

export function Data_fun(){
    function getData(){
        alert("hello from Student");
    }
    return(
        <DemoFun_as_Props data={getData}/>
    );
}

