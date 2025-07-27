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
                        <p className="my-4 text-muted fs-5">
                            Are you craving for some homemeade food but don't have time or energy to prepare it yourself?
                            Download our mobile app for a convenient and delicious solution. With just a few clicks, you can enjoy the 
                            taste of homemeade meals without having to leave your home
                        </p>
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
