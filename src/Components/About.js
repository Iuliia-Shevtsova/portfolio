import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import about_picture from '../images/about.jpg'

const About = () => (

    <Row justify-content-xs-center md={8}>
        <Col md={{ span: 2, offset: 2 }} >
            <img src={about_picture} alt="Iuliia Shevtsova" className="img_about"/>
        </Col>
        <Col md={{ span: 8 }}>
        <div className="about">  
            <p /> 
            <p >Hi, I am Full Stack Developer. </p>
            <p >I love to create awesome user websites and transform ideas into reality using  ReactJs, JavaScript, HTML5, and CSS3.</p>
        </div>
        </Col>
    </Row>

    
);

export default About;