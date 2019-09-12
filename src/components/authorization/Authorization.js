import React, {useState} from 'react';
import { GoogleLogin } from 'react-google-login';
import { Redirect } from "react-router-dom";

export default function Authorization() {
    // const [redirect, setRedirect] = useState(false)
    // const [user, setUser] = useState('');
    // const responseGoogle = (response) => {
    //     console.log(response);
    //      localStorage.setItem('key', response.Zi.access_token);
    //      localStorage.setItem('email', response.w3.U3);
    //     if(response) {
    //         setRedirect(true);
    //     }
    //   }
    //   if (redirect) {
    //     return <Redirect to='/test'/>;
    //   }
    return (
      <div>
        {/* <GoogleLogin
          clientId="2423356441-he2pam2orr6d5c0q7es751hvmlsp9tk8.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
      /> */}
      </div>
    )
} 