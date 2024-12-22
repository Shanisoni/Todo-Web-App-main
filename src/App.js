import React, {Component} from "react"
import TodoList from "./components/TodoList"
import $ from 'jquery';
import Popper from 'popper.js';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import GoogleLogin from "react-google-login";

export class App extends Component {
  responseGoogle=(response)=>{
    console.log(response.profile.name)
  }
  render(){
  return (
    <>
     <GoogleLogin
      clientId="268887589904-9p434qrn1sn22idp7hlrjfnbd4opj88s.apps.googleusercontent.com"
      buttonText="Login"
      onSuccess={this.responseGoogle}
      onFailure={this.responseGoogle}
      cookiePolicy={'single_host_origin'}
     />
      <TodoList/>
    </>
  )
}
}

export default App;
