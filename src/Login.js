// import React, { Component } from "react";
// import './Login.css';
// import Dishes from'./Dishes';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// class Login extends Component {
//   constructor(){
//     super();
//     this.state= {
//       username:"sarath",
//       password:"12345",
//       entered_uname:"",
//       entered_pass:"",
//       auth: false
//     }
//   }

//   set_uname=(e)=>{
//     this.setState({entered_uname: e.target.value});
//   }
//   set_password=(e)=>{
//     this.setState({entered_pass: e.target.value});
//   }
//   login_check=()=>{
//     if(this.state.username == this.state.entered_uname &&
//        this.state.password == this.state.entered_pass) {
//         // this.Setstate({auth: true})
//         alert("password matched");
    
//        }
//        else{
//          alert("unsuccessful login");
//        }
//   }
  
//   render(){
//     return(
//     <div className="login">
//       <h1>Login</h1>
//       <form>
//       <label>
//       <p>Username</p>
//       <input type="text" onChange = {this.set_uname} />
//       </label>
//       <label>
//       <p>Password</p>
//       <input type="password" onChange = {this.set_password}/>
//       </label>
//       <div>
//       <button type="submit" onClick = {this.login_check}>Submit</button>
//   </div>
// </form>
// </div>
//     ) 
//   //   <Router>
//   //   <Switch>
//   //     <Route path="/Dishes">
//   //       <Dishes/>
//   //     </Route>
//   //   </Switch>
//   // </Router>
//   }
// }
// export default Login;