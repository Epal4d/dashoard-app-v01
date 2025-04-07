const Register = () => 
{
    return(
        <>
                <h1>Register</h1>
                
                <form>
                    Username:<label> <input type="text" placeholder="*Username Required" maxLength={25}></input> </label><br></br>
                    Password:<label> <input type="text" placeholder="*Password Required" maxLength={25}></input></label><br></br>
                    Confirm Password: <label> <input type="text" placeholder="*Confirm Password" maxLength={25}></input></label><br></br>
                    <p></p>
                    <input type="checkbox"/>Terms and Services
                    <button>Submit</button>
                </form>
                <p></p>
                <p>Register</p>

        </>
    )
}
export default Register