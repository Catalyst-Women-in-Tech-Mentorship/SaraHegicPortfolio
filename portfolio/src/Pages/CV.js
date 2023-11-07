import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import Header from "../components/header";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const CV = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
    <Header></Header>
    <div style = {{marginTop: "3%"}}>
        
      <Document
        file="../CV - Sara Hegić.pdf"
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber}
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
