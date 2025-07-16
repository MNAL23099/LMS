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

        fetch("http://localhost:5000/auth/signup", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({username : userName, password: userPass, email: userEmail, accountType: accountType})
        }).then((res) => res.json())
        .then((jsonRes) => console.log(jsonRes));

        goToDashboard();
    }

    return (
        <>
            <Navbar pageType="Sign Up"/>
            <div style={{
                minHeight: "100vh",
                background: "linear-gradient(135deg, #232526 0%, #b59637ff 100%)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start"
            }}>
                <div style={{
                    marginTop: "3rem",
                    background: "rgba(30,30,30,0.97)",
                    borderRadius: "20px",
                    boxShadow: "0 8px 32px 0 rgba(191, 161, 74, 0.15), 0 2px 8px 0 rgba(191, 161, 74, 0.10)",
                    padding: "2.5rem 2rem",
                    maxWidth: "420px",
                    width: "100%",
                    border: "1px solid #bfa14a"
                }}>
                    <form onSubmit={submitForm} id="form_1">
                        <h1 style={{
                            textAlign: "center",
                            marginBottom: "2rem",
                            color: "#bfa14a",
                            fontWeight: 800,
                            letterSpacing: "1px",
                            fontFamily: "'Segoe UI', 'Roboto', 'Arial', sans-serif"
                        }}>Sign Up</h1>

                        <div className="mb-3">
                            <label htmlFor="signup-name" className="form-label" style={{fontWeight: 500, color: '#bfa14a'}}>Name</label>
                            <input onChange={(e) => setUserName(e.target.value)} type="text" className="form-control" id="signup-name" style={{borderRadius: "8px", background: '#232526', color: '#fff', border: '1px solid #bfa14a'}} aria-describedby="emailHelp" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="signup-email" className="form-label" style={{fontWeight: 500, color: '#bfa14a'}}>Email address</label>
                            <input onChange={(e) => setUserEmail(e.target.value)} type="email" className="form-control" id="signup-email" style={{borderRadius: "8px", background: '#232526', color: '#fff', border: '1px solid #bfa14a'}} aria-describedby="emailHelp" />
                            <div id="emailHelp" className="form-text" style={{color: '#bfa14a'}}>We'll never share your email with anyone else.</div>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="signup-password" className="form-label" style={{fontWeight: 500, color: '#bfa14a'}}>Password</label>
                            <input onChange={(e) => setUserPass(e.target.value)} type="password" className="form-control" id="signup-password" style={{borderRadius: "8px", background: '#232526', color: '#fff', border: '1px solid #bfa14a'}} />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="signup-accountType" className="form-label" style={{fontWeight: 500, color: '#bfa14a'}}>Account Type</label>
                            <select onChange={(e) => setAccountType(e.target.value)} className="form-select" id="signup-accountType" style={{borderRadius: "8px", background: '#232526', color: '#fff', border: '1px solid #bfa14a'}} aria-label="Default select example">
                                <option value="not_selected">Account Type</option>
                                <option value="lab_engineer">Lab Engineer</option>
                                <option value="student">Student</option>
                            </select>
                        </div>

                        <button type="submit" className="btn w-100" style={{
                            borderRadius: "25px",
                            fontWeight: 700,
                            fontSize: "1.1rem",
                            background: "linear-gradient(90deg, #bfa14a 0%)",
                            color: "#fff",
                            border: "none",
                            boxShadow: "0 2px 8px 0 rgba(191, 161, 74, 0.10)"
                        }}>Sign Up</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default SignUp;