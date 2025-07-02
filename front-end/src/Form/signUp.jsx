import Navbar from "../Nav/Navbar";

function SignUp() {
    return (
        <div>
            <Navbar />
            
            <form>
            <h1>Sign Up Page</h1>

            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>

            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" />
            </div>

            <select class="form-select" aria-label="Default select example">
                <option selected>Account Type</option>
                <option value="1">Lab Engineer</option>
                <option value="2">Student</option>
            </select>
            <br />

            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
        </div> 
    );
}

export default SignUp;