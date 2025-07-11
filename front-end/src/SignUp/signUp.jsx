import "./signUp.css";
import Navbar from "../Nav/Navbar";
import { useNavigate, useNavigation } from "react-router-dom";
import { useState } from "react";

function SignUp() {

    //These are the variables of the form
    //When the form gets submitted, the input values get saved in these variables
    const [userName, setUserName] = useState("");
    const [userPass, setUserPass] = useState("");
    const [accountType, setAccountType] = useState("");
    const [userEmail, setUserEmail] = useState("");

    const navigate = useNavigate();

    function goToDashboard(e) {
        e.preventDefault();
        console.log("Changing navigation to dashboard!");         
        navigate("/dashboard");
    }

    //Submit the form
    function submitForm(e){
        e.preventDefault();

        fetch("http://localhost:5000/addUser", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({userName : userName, userPass: userPass, userEmail: userEmail, accountType: accountType})
        }).then((res) => res.json())
        .then((jsonRes) => console.log(jsonRes));

        goToDashboard();
    }

    return (
        <div>
            <Navbar pageType="Sign Up"/>

            {/* Sign up form */}
            <div id="signUp-div_1">
            <form onSubmit={submitForm} id="form_1">
            <h1>Sign Up Page</h1>

            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                <input onChange={(e) => setUserName(e.target.value)} type="text" className="form-control" aria-describedby="emailHelp" />
            </div>

            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input onChange={(e) => setUserEmail(e.target.value)} type="email" className="form-control" aria-describedby="emailHelp" />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>

            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input onChange={(e) => setUserPass(e.target.value)} type="password" className="form-control" />
            </div>

            <select onChange={(e) => setAccountType(e.target.value)} className="form-select" aria-label="Default select example">
                <option selected>Account Type</option>
                <option value="1">Lab Engineer</option>
                <option value="2">Student</option>
            </select>
            <br />

            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </div>
        </div> 
    );
}

export default SignUp;