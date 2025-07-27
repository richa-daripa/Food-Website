import '../style.css'
import service1 from '../assets/serve1.png';
import service2 from '../assets/serve2.png';
import service3 from '../assets/serve3.png';
import { Container, Card, Col, Row } from 'react-bootstrap';

const Services = () => {
    return (
        <div className="service py-5">
             <h2 className='text-center mb-5'>Why Choose Us</h2>
            <Container className="mt-5 px-lg-5">
                <Row className="g-5">
                    <Col md={4} className="text-center">
                        <img src={service1} alt="Easy to Order" className="service-img mb-3" />
                        <div className="mx-auto service-content">
                            <h3 className="fw-bold fs-4 py-2">Easy Ordering</h3>
                            <p className="text-muted">
                                Our user-friendly platform makes ordering simple. Plus, with secure payment options, so you can order with confidence.
                            </p>
                        </div>
                    </Col>

                    <Col md={4} className="text-center">
                        <img src={service2} alt="Best Quality" className="service-img mb-3" />
                        <div className="mx-auto service-content">
                            <h3 className="fw-bold fs-4 py-2">Best Quality</h3>
                            <p className="text-muted">
                                Savor the excellence of our dishes, meticulously prepared with the highest standards of freshness and quality.
                            </p>
                        </div>
                    </Col>

                    <Col md={4} className="text-center">
                        <img src={service3} alt="Delivery to Home" className="service-img mb-3" />
                        <div className="mx-auto service-content">
                            <h3 className="fw-bold fs-4 py-2">Speedy Delivery</h3>
                            <p className="text-muted">
                                Hot meals, delivered right to your doorstep. We ensure your food arrives quickly and in perfect condition.
                            </p>
                        </div>
                    </Col>

                    
                </Row>
            </Container>
        </div>
    );
};

export default Services;