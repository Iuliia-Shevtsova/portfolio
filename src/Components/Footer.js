import React from 'react';
// import Navbar from 'react-bootstrap/Navbar';

const Footer = () => (
    <div className="footer">
     {/* <Navbar expand="lg" variant="dark" fixed="bottom" className="footer"> */}
        {/* <Navbar.Brand href="#"> */}
        <ul>
            <li><a className="contact_link" href="mailto:uliyaal2018@gmail.com" target="_blank" rel="noopener noreferrer"><i className="fas fa-envelope"></i></a></li>
            <li><a className="contact_link" href="https://github.com/Iuliia-Shevtsova/" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a></li>
            <li><a className="contact_link" href="https://www.linkedin.com/in/iuliia-shevtsova-b19828198/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i> </a></li>
        </ul>
            
            {/* <a className="contact_link" href="mailto:uliyaal2018@gmail.com" target="_blank" rel="noopener noreferrer"><i class="fas fa-envelope"></i></a>
            <a className="contact_link" href="https://github.com/Iuliia-Shevtsova/" target="_blank" rel="noopener noreferrer"><i class="fab fa-github-square"></i></a>
            <a className="contact_link" href="https://www.linkedin.com/in/iuliia-shevtsova-b19828198/" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i> </a> */}
            
                   
        {/* </Navbar.Brand> */}
    {/* </Navbar> */}
    </div>
);

export default Footer;