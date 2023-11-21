import "./contact.css"

const ContactSection = () => {
  return (
    <div>
      <div className="intro_to_contact" id="contact">

        <div >
          <img  className="logo1" src="../contact.png" alt="Logo" />
          <div className="line"></div>
        </div>
      </div>
      <div className="text">
        <p>Your introductory text goes here.</p>
      </div>
      <div className="contact_section">
        <div className="contact_form">
          <h2>Contact Me</h2>
          <form>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="question">Question</label>
              <textarea id="question" name="question" rows="4"></textarea>
            </div>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
