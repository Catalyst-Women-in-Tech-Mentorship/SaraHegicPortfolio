import "../App.css"

const Header = () => {
return (
  <div>
  <div className="navbar">
    <div className="navbar-left">
      <img src="logo.png" alt="Logo" className="logo" />
      
    </div>
    <div className="navbar-right">
    
        <a href="/">Home</a>
        <a href="/about">About Me</a>
        <a href="/projects">Projects</a>
      </div>
      <div className="menu-icon" >
      <img src="logo.png" alt="Logo" className="logo" />
        </div>
      
      <div className="nav-links">
      <a href="/" className="social-icon">
        Social Icon 1
      </a>
      <a href="/" className="social-icon">
        Social Icon 2
      </a>
      <a href="/" className="social-icon">
        Social Icon 3
      </a>
    </div>
    
    
  </div>
    <div className="navbar-right-dropdown">
    
    <a href="/">Home</a>
    <a href="/about">About Me</a>
    <a href="/projects">Projects</a>
  </div>

  </div>
  
  );
};

export default Header;
