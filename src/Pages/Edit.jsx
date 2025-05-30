import React, { useState, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Text from "../Components/Text";
import html2canvas from "html2canvas";
import "./Edit.css"

function EditPage() {
  const [params] = useSearchParams();
  const [count, setCount] = useState(0);

  const memeRef = useRef(null);

  const addText = () => {
    setCount((prev) => prev + 1);
  };

  const saveAsImage = () => {
    setTimeout(async () => {
    if (memeRef.current) {
      const editableElements = memeRef.current.querySelectorAll("[contenteditable]");
      editableElements.forEach((el) => el.setAttribute("contenteditable", "false"));

        const canvas = await html2canvas(memeRef.current,{
        useCORS:true,
        allowTaint: true,
        backgroundColor: null,
        scale: 2
      });
      editableElements.forEach((el) => el.setAttribute("contenteditable", "true"));
      
      const link = document.createElement("a");
      link.download = "meme.jpg";
      link.href = canvas.toDataURL("image/jpeg");
      link.click();
    }
    }, 100);
  };

  return (
    <div className="container text-center">
      <h1 className="headline">Meme Editor Activated</h1>
      <div ref={memeRef} className="meme mt-5 mb-5 d-flex justify-content-center align-items-center" 
      style={{ 
        position: "relative",
        display:"inline-block",
       }}>
        <img 
            src={params.get("url")} 
            width="250px" 
            alt="Meme base" 
            crossOrigin="anonymous"
        />
        {
          Array.from({ length: count }).map((_, index) => (
            <Text
              key={index}
              defaultText="Double click to edit"
              initialPosition={{ x: 0, y: 500 + index * 50 }}
            />
          ))
        }
      </div>

      <div className="button-row mt-4">

      <Button className="btn" style={{
        backgroundColor:'#4a4a4a',
        text:'white',
        marginLeft:'20px',
        border:'2px solid white'
        }} 
        onClick={addText}
      >
        Add Text
      </Button>

      <Button className="btn"
      style={{
        backgroundColor:'#7b4397',
        color:'white',
        marginLeft:'50px',
        border:'2px solid white'
      }}
      variant="success" onClick={saveAsImage}>Save</Button>
      </div> 
    </div>
  );
}

export default EditPage;