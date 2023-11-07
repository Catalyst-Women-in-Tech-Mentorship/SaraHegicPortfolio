import Footer from "../components/footer";
import Header from "../components/header";

import * as React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

const Projects = () => {
  return (
    <div>
      <Header page={"projects"}></Header>

      <div className="content-projects">
        <Box sx={{ width: 0.5, height: 1, ml: "25%", mr: "auto", mt: 20}}>
          <ImageList variant="masonry" cols={2} gap={30}>
            {itemData.map((item) => (
              <ImageListItem key={item.img} className="image-list-item">
              <div className="image-container">
              <div className="image-overlay"></div>
              <div className="image-text">Vaš tekst na dnu slike</div>
                <img
                  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  src={`${item.img}?w=248&fit=crop&auto=format`}
                  alt={item.title}
                  loading="lazy"
                  className="list-image"
                />
                
               
              </div>
            </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </div>

      <Footer></Footer>
    </div>
  );
};

const itemData = [
  {
    img: "../bb.png",
    title: "Brick Breaker",
  },
  {
    img: "../quiz.png",
    title: "Quiz",
  },
  {
    img: "../triba.png",
    title: "Triba",
  },
 
  
];

export default Projects;
