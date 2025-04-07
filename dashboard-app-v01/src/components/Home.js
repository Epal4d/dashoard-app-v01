import {Link} from "react-router-dom"

const Home = () =>
{
    return(
        <>
            <p>React Dashboard App v1</p>
            <p></p>
            <p>
                <Link to ="/login">Login</Link>
            </p>
            <p>
                <Link to ="/register">Register</Link>
            </p>

        </>
    )
}
export default Home;