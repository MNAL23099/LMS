import Navbar from "../../Nav/Navbar";

function AddInventory(){
    return(
        <>
        <Navbar pageType="Add Inventory Item"/>

        <div id="addInventory-div_1">
        <form>
        <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Item Name</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text">For example; PC, Circuit board, etc.</div>
        </div>
        <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">Quantity</label>
            <input type="password" className="form-control" id="exampleInputPassword1" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </div>
        </>
    );
}

export default AddInventory;