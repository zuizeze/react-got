import React, { Component } from 'react';
import { getUser} from '../../api'

export class Login extends Component {
  componentDidMount(){
    getUser()
      .then(response=>{
      })
  }
  render() {
    return (
      <div>
        登陆
      </div>
    );
  }
}

export default Login;
