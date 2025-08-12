import { useState } from "react";
import Navbar from "../Nav/Navbar";
import {  useNavigate } from "react-router-dom";


function SignIn(){

    const navigate = useNavigate();
    function gotoInventory(){
    navigate("/adminDashboard");
    }

   const [email, setEmail] = useState("");
    const [password, setPasseword] = useState("");
    const [showRoleDropdown, setShowRoleDropdown] = useState(false);
    const [role, setRole] = useState(""); 

    function submitform(e){
    e.preventDefault();
    fetch("http://localhost:5000/auth/signin", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ email: email, password: password })
    })
    .then((res) => res.json())
    .then((res) => {
        if (res.status === "missing_fields") {
            window.alert("Fill all the fields");
        } else if (res.status === "credentials_mismatch") {
            window.alert("Credentials mismatched, try again");
        } else if (res.status === "success") {
            setRole(res.role);
            setShowRoleDropdown(true); // Show dropdown after login
            window.alert(`Logged in as ${res.role}`);
        } else {
            window.alert("Unexpected response from server.");
        }
    });
}

    return (
        <>
            <Navbar pageType="Sign In" />

            <div style={{
                minHeight: "100vh",
                background: "linear-gradient(135deg, #fff3e0 0%)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start"
            }}>
                <div style={{
                    marginTop: "3rem",
                    background: "linear-gradient(135deg, #ffe0b2 0%, #f19711ff 100%)",
                    borderRadius: "1.5rem",
                    boxShadow: "0 8px 32px rgba(255, 152, 0, 0.18), 0 2px 8px rgba(255, 87, 34, 0.10)",
                    padding: "2.5rem 2rem",
                    maxWidth: "420px",
                    width: "100%",
                    border: "2.5px solid #e65100",
                    color: "#bf360c",
                    fontWeight: 700,
                    backdropFilter: "blur(2px)",
                    transition: "box-shadow 0.3s, border 0.3s"
                }}>
                    <form onSubmit={submitform} id="form_1">
                        <h1 style={{
                            textAlign: "center",
                            marginBottom: "2rem",
                            color:"#fff",
                            fontWeight: 800,
                            letterSpacing: "1px",
                            fontFamily: "'Segoe UI', 'Roboto', 'Arial', sans-serif"
                        }}>Sign In</h1>

                        <div className="mb-3">
                            <label htmlFor="signin-email" className="form-label" style={{ fontWeight: 500, color: '#fff' }}>Email address</label>
                            <input onChange={(e)=>{setEmail(e.target.value)}} type="email" className="form-control" id="signin-email" style={{ borderRadius: "8px", backgroundColor: ' #eb8f06ff', color: '#fff', border: '1px solid #800000' }} aria-describedby="emailHelp" />
                            <div id="emailHelp" className="form-text" style={{ color: '#fff' }}>We'll never share your email with anyone else.</div>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="signin-password" className="form-label" style={{ fontWeight: 500, color: '#fff' }}>Password</label>
                            <input onChange={(e)=>{setPasseword(e.target.value)}} type="password" className="form-control" id="signin-password" style={{ borderRadius: "8px", backgroundColor: '#eb8f06ff', color: '#fff', border: '1px solid #800000' }} />
                        </div>
                        
                        {showRoleDropdown && (
                        <div style={{ marginTop: "1rem" }}>
                            <label htmlFor="role-select" style={{ color: '#fff', fontWeight: 500 }}>Select your destination:</label>
                            <select
                                id="role-select"
                                className="form-select mt-2"
                                style={{ borderRadius: "8px", backgroundColor: '#fff3e0', border: '1px solid #e65100' }}
                                onChange={(e) => {
                                    const selected = e.target.value;
                                    if (selected === "admin") {
                                        navigate("/adminDashboard");
                                    } else if (selected === "sub_manager") {
                                        navigate("/subManagerDashboard");
                                    } else if ( selected === "lab_engineer")
                                    {
                                        navigate("/LabEngineerDashboard");
                                    }
                                    else {
                                        window.alert("No valid selection made.");
                                    }
                                    setShowRoleDropdown(false);
                                }}
                            >
                                <option value="">-- Select Dashboard --</option>
                                <option value="admin">Admin Dashboard</option>
                                <option value="sub_manager">Sub Manager Dashboard</option>
                                <option value="lab_engineer">Lab Engineer Dashboard</option>
                            </select>
                        </div>
                    )}

                       

                        <button type="submit" className="btn w-100" style={{
                            borderRadius: "25px",
                            fontWeight: 700,
                            fontSize: "1.1rem",
                            backgroundColor: "#eb8f06ff",
                            color: "#fff",
                            border: "2.5px solid #e65100",
                            boxShadow: "0 2px 8px 0 rgba(255, 152, 0, 0.10)"
                        }}>Sign In</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default SignIn;