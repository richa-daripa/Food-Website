import { Container, Card, Col,Row } from "react-bootstrap";
import app from '../assets/app.png';
import appstore from '../assets/app_store.png';
import playstore from '../assets/play_store.png';
import '../style.css'

const AppDownLoad = () => {
    return (
        <div className=" my-5 py-5">
            <Container>
                <Row className="align-items-center justify-content-center mx-3 gap-5">
                    
                    <Col md={3} className="text-center mb-4">
                        <img src={app} alt="MobileApp" className="img-fluid app-img" />
                    </Col>

                    
                    <Col md={6}>
                        <h2 className="display-6">Get the Eatzio app now!</h2>
                        <p className="mt-3 text-muted fs-5 mb-5">
                            Experience the convenience of discovering and ordering food anytime, anywhere with the Eatzio app. Enjoy timely deliveries that bring your favorite meals straight to your door.
                        </p>
                        <span className="text-secondary">Download app from</span>
                        <div className="d-flex gap-3 mt-3 download-from">
                            <img src={playstore} alt="Google Play" className="store-btn" />
                            <img src={appstore} alt="App Store" className="store-btn" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AppDownLoad;
