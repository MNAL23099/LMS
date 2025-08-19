import { useState } from "react";
import Navbar from "../Nav/Navbar";

function FileUpload(){
    const [userFile, setUserFile] = useState(null);
    function uploadFile(){
        const formData = new FormData;
        formData.append("file", userFile);

        fetch("http://localhost:5000/uploadFileTest/uploadFile", {
            method: "POST",
            body: formData
        })
        .then((res)=> {return res.text()})
        .then((textRes)=> {
            if (textRes == "success"){
                window.alert("File has been uploaded!");
            }
        })
    }

    return(
        <>
            <Navbar />
            <form onSubmit={uploadFile}>
            <input onChange={(e)=>{setUserFile(e.target.files[0])}} type="file" />
            <input type="submit" />
            </form>
            
        </>
    );
}

export default FileUpload;