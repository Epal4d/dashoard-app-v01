import { useState } from "react"
import { Link } from "react-router-dom"


const Login = () => 
{
    return(
        <>
                <h1>Login</h1>

                <form>
                   Username: <label> <input type="text" placeholder="*Username Required" maxLength={25}></input> </label><br></br>
                   Password: <label> <input type="text" placeholder="*Password Required" maxLength={25}></input></label><br></br>
                    <p></p>
                    <button>Submit</button>
                </form>
                <p></p>
                <p>Login</p>
        </>
    )
}

export default Login;