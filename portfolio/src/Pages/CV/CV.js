import React from "react";
import { Document, Page, pdfjs } from "react-pdf";
import Header from "../../components/Header/header";
import "./CV.css"

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const CV = () => {  
  
 
  return (
    <div>
    <Header></Header>
    <div style = {{marginTop: "3%"}}>
        
      <Document
        file="../CV - Sara Hegić.pdf"
      >
        <Page pageNumber= {1}
        renderTextLayer={false}
        renderAnnotationLayer={false} />
      </Document>
      
      
      <a href="../CV - Sara Hegić.pdf" download>
        <button>Download PDF</button>
      </a>
    </div>
    </div>
  );
};

export default CV;
