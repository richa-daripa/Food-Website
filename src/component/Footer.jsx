import { Container, Navbar, Row, Col } from 'react-bootstrap';
import logo from '../assets/logo.png';
import '../style.css'

const Footer = () => {
    return (
        <div className="footer text-secondary bg-dark pt-5 px-5">
            <Container>
                <Row className="gy-4">
                   
                    <Col md={4} >
                        <img src={logo} alt="Eatzio Logo" width="120"/>
                        <p className="mt-3">
                            Thank you for choosing Eatzio! We are dedicated to bringing you the best in culinary delights.
                            For questions or support, feel free to reach out. Enjoy your meal and happy dining!
                        </p>
                        <div className="d-flex gap-4 fs-3">
                            <i className="bi bi-facebook "></i>
                            <i className="bi bi-instagram "></i>
                            <i className="bi bi-twitter-x"></i>
                            <i className="bi bi-whatsapp "></i>
                        </div>
                    </Col>

                    <Col md={2} className='ms-md-5'>
                        <h5 className="text-white">Explore</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2 hover-link ">Blogs</li>
                            <li className="mb-2 hover-link ">Terms & Conditions</li>
                        </ul>
                    </Col>

                    
                    <Col md={2}>
                        <h5 className="text-white">We Deliver At</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2 ">Chennai</li>
                            <li className="mb-2 ">Hyderabad</li>
                            <li className="mb-2 ">Mumbai</li>
                        </ul>
                    </Col>

                   
                    <Col md={3}>
                        <h5 className="text-white">Get In Touch</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2">
                               <i className="bi bi-telephone-fill me-2"></i>+91 785-412-8327
                            </li>
                            <li className="mb-2">
                               <i className="bi bi-envelope-fill me-2"></i>foodordering@Eatzio.com
                            </li>
                            <li >
                                <i className="bi bi-geo-alt-fill me-2"></i>Food Ordering Service, 42nd Living St, 43043 Mumbai, India
                            </li>
                        </ul>
                    </Col>
                </Row>

                <hr className="border-secondary mt-4" />
                <p className="text-center p-0 m-0 py-2">&copy; 2024 Eatzio.com | All rights reserved.</p>
            </Container>
        </div>
    );
};
 

export default Footer;