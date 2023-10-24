import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";

const Footer = () => {
  return (
    <div className="footer">
      <div className="left">&copy; 2023 Sara Hegić</div>
      <div className="center">
        <a href="#top" className="scroll-to-top">
          <div className="arrow-to-top">
            <ArrowCircleUpIcon  ></ArrowCircleUpIcon>
          </div>
        </a>
      </div>
      <div className="right">
        <a href="/">Home </a>
        <a href="/about">About </a>
        <a href="/projects">Projects </a>
      </div>
    </div>
  );
};

export default Footer;
