import React, {Component} from "react";
// import Foods from './Foods';
import '../Login.css';
import {createBrowserHistory} from 'history';
import {Button} from 'react-bootstrap';

const history = createBrowserHistory();
const homepage =()=>{
  history.push('/Foods')
}

class Login extends Component{
    constructor(){
        super();
        this.state= {
            username:"user",
            password:"12345",
            entered_uname:"",
            entered_pass:"",
          }
    }


    set_uname=(e)=>{
        this.setState({entered_uname: e.target.value});
      }
      set_password=(e)=>{
        this.setState({entered_pass: e.target.value});
      }
      login_check=(e)=>{
        // e.preventDefault();
        if(this.state.username == this.state.entered_uname &&
           this.state.password == this.state.entered_pass) {
            // this.Setstate({auth: true})
            homepage();
            // alert("password matched");
           }
           else{
             alert("Unsuccessful Login");
           }
      }


    render(){
        return(
            
            <form className="login">
            <h1 className="mt-5 mb-4">Login</h1>
            {/* <label> */}
            {/* <p>Username</p> */}
            <input style={{width: "250px"}} className="mb-4" placeholder="Enter username" type="text" onChange = {this.set_uname} />
            {/* </label><br/> */}
            {/* <label> */}
            {/* <p>Password</p> */}
            <input style={{width: "250px"}} className="mb-4" placeholder="Enter password" type="password" onChange = {this.set_password}/>
            {/* </label> */}
            {/* <div> */}
            <Button style={{width: "250px"}} type="submit" onClick = {this.login_check}>Login</Button>
        {/* </div> */}
      </form>
        )
    }
}
export default Login;