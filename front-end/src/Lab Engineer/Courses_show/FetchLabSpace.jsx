import Navbar from "../../Nav/Navbar";             //this file is for the shwig up of an empty space for the uploading of labs


function fetch_go(){
     const body=  document.getElementById("box");
        const card = document.createElement("div");
        card.style.height = "180px";     // not too tall
        card.style.width = "220px";      // compact width
        card.style.border = "2px dashed #6a11cb"; // dashed border for placeholder feel
        card.style.borderRadius = "12px";
        card.style.background = "#f9f9ff"; // soft background
        card.style.display = "flex";
        card.style.alignItems = "center"; //y
        card.style.justifyContent = "center";  //x
        card.style.margin = "20px auto"; // center horizontally
        card.style.cursor = "pointer";
    

        body.appendChild(card);

}
export function Fetch_lab_space(){

    return(
        <>
          <Navbar pageType= "Upload Labs Here"/>
         <button onClick={fetch_go} style={{
             
           padding: "12px 20px",
            background: "linear-gradient(90deg, #6a11cb 0%, #2575fc 100%)",
            color: "white",
            border: "none",
            borderRadius: "8px",
            fontSize: "16px",
            fontWeight: "bold",
            cursor: "pointer",
            boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
            transition: "all 0.3s ease",
            margin: "20px"
          }}>
         
        
          Add Lab Space
        </button>
        {/* {yhn hi dbba bnaiga} */}
        <div id="box" style={{ marginTop: "20px" }}></div>
        
        </>
    );
}