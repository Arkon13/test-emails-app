import React, { useState, useEffect } from "react";
import axios from 'axios';

export default function Test() {
    const [key, setKey] = useState(localStorage.getItem('key'))
    const [email, setEmail] = useState(localStorage.getItem('email')) 
    

    // useEffect(() => {
    //     axios.get(`https://www.googleapis.com/gmail/v1/users/me/messages`, { 
    //         headers: {
    //             "Authorization": "Bearer" + key,
    //         },
    //         mode: 'no-cors',
    //         "auth_uri": "https://accounts.google.com/o/oauth2/auth"
    //     }
    //     )
    //     .then(res => console.log(res))
    // })

    return (
        <div>Test</div>
    )
}