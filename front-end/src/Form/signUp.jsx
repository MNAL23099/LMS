import "./signUp.css";
import Navbar from "../Nav/Navbar";
import { useNavigate, useNavigation } from "react-router-dom";

function SignUp() {

    const navigate = useNavigate();

    function goToDashboard(e) {
        e.preventDefault();         
        navigate("/dashboard");
    }

    return (
        <div>

            <Navbar />

            {/* Sign up form */}
            <form id="form_1">
            <h1>Sign Up Page</h1>

            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>

            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" />
            </div>

            <select className="form-select" aria-label="Default select example">
                <option selected>Account Type</option>
                <option value="1">Lab Engineer</option>
                <option value="2">Student</option>
            </select>
            <br />

            <button type="submit" className="btn btn-primary" onClick={goToDashboard}>Submit</button>
        </form>
        </div> 
    );
}

export default SignUp;