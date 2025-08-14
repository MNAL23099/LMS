import Navbar from "../Nav/Navbar";

function Website_Admin_Add_Account(){
    return(
        <>
        <Navbar pageType="Add Account"/>

        <div id="addInventory-div_1" style={{
            minHeight: "100vh",
            background: "#f5f6fa",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
        }}>
        <form onSubmit={"#"} id="inventory-div_1-form_1" style={{
            background: "#fff",
            borderRadius: "18px",
            boxShadow: "0 8px 32px 0 rgba(0,33,71,0.10), 0 2px 8px 0 rgba(0,33,71,0.08)",
            padding: "2rem 2.2rem",
            maxWidth: "370px",
            width: "100%",
            border: "2px solid #002147",
            color: "#002147"
        }}>
        <h2 style={{
            textAlign: "center",
            marginBottom: "1.5rem",
            color: "#002147",
            fontWeight: 800,
            letterSpacing: "1px",
            fontFamily: "'Segoe UI', 'Roboto', 'Arial', sans-serif"
        }}>Add User Account</h2>
        <div className="mb-3">
            <label htmlFor="add-inventory-item-name" className="form-label" style={{fontWeight: 500, color: '#002147'}}>Name</label>
            <input type="text" className="form-control" id="add-inventory-item-name" style={{borderRadius: "8px", background: '#fff', color: '#002147', border: '1px solid #0056b3'}} aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
            <label htmlFor="add-inventory-item-name" className="form-label" style={{fontWeight: 500, color: '#002147'}}>Email</label>
            <input type="email" className="form-control" id="add-inventory-item-name" style={{borderRadius: "8px", background: '#fff', color: '#002147', border: '1px solid #0056b3'}} aria-describedby="emailHelp" />
            <div className="form-text" style={{color: '#002147'}}>University assigned email for this person.</div>
        </div>
        <div className="mb-3">
            <label htmlFor="add-inventory-quantity" className="form-label" style={{fontWeight: 500, color: '#002147'}}>Role</label>
            <select className="form-select" aria-label="Default select example" style={{borderRadius: "8px", background: '#fff', color: '#002147', border: '1px solid #0056b3'}}>
                <option selected>Choose Role</option>
                <option value="lab_engineer">Lab Engineer</option>
                <option value="lab_technician">Lab Technician</option>
                <option value="lab_assistant">Lab Assistant</option>
            </select>
        </div>
        <button type="submit" className="inventory-go-btn w-100" style={{
            borderRadius: "25px",
            fontWeight: 700,
            fontSize: "1.1rem",
            background: 'linear-gradient(90deg, #ffd700 0%, #ffb400 100%)',
            color: "#002147",
            border: "none",
            boxShadow: "0 2px 8px 0 rgba(0,33,71,0.10)",
            marginTop: "1rem"
        }}>Submit</button>
        </form>
        </div>
        
        </>
    );
}

export default Website_Admin_Add_Account;