import Navbar from "../Nav/Navbar";

function SignIn(){
  
    return (
        <>
            <Navbar pageType="Sign In" />
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
                    <form id="form_1">
                        <h1 style={{
                            textAlign: "center",
                            marginBottom: "2rem",
                            color: "#bfa14a",
                            fontWeight: 800,
                            letterSpacing: "1px",
                            fontFamily: "'Segoe UI', 'Roboto', 'Arial', sans-serif"
                        }}>Sign In</h1>

                        <div className="mb-3">
                            <label htmlFor="signin-email" className="form-label" style={{ fontWeight: 500, color: ' #bfa14a' }}>Email address</label>
                            <input type="email" className="form-control" id="signin-email" style={{ borderRadius: "8px", background: '#fff', color: '#222', border: '1px solid #ffd700' }} aria-describedby="emailHelp" />
                            <div id="emailHelp" className="form-text" style={{ color: ' #bfa14a' }}>We'll never share your email with anyone else.</div>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="signin-password" className="form-label" style={{ fontWeight: 500, color: ' #bfa14a' }}>Password</label>
                            <input type="password" className="form-control" id="signin-password" style={{ borderRadius: "8px", background: '#fff', color: '#222', border: '1px solid #ffd700' }} />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="signin-accountType" className="form-label" style={{ fontWeight: 500, color: ' #bfa14a'}}>Account Type</label>
                            <select className="form-select" id="signin-accountType" style={{ borderRadius: "8px", background: '#fff', color: '#222', border: '1px solid #ffd700' }} aria-label="Default select example">
                                <option value="1">Lab Engineer</option>
                                <option value="2">Student</option>
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
                        }}>Sign In</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default SignIn;