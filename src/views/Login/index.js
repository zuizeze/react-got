import React, { Component } from 'react';
import { getUser, login} from '../../api'

export class Login extends Component {
  componentDidMount(){
    var params = "?phone=18296821399&password=765699129lq123"
    login(params)
      .then(response=>{
        console.log(response)
      })
  }
  render() {
    return (
      <div >
        登陆
      </div>
    );
  }
}

export default Login;
