import { useContext } from "react";
import { Container, Button, ListGroup,Row,Col} from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { StoreContext } from "../contextapi/ContextAPI";

const Order = () => {
    const { cartItems, setCartItems, food_item, getTotalAmount } = useContext(StoreContext);
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
        setCartItems({});
    }
    return (
        <Container fluid className="py-5 bg-warning-subtle">
            <div className="d-flex flex-column justify-content-center align-items-center gap-4">
                <i className="bi bi-patch-check-fill text-success display-4" ></i>
                <h2 className="text-center fw-bold">
                    Thank You For Ordering
                </h2>
                <Container fluid className="py-4">
                    <Row className="justify-content-center">
                        <Col xs={12} md={6}>
                            <div className="shadow p-4 rounded-3 border bg-warning bg-opacity-50">
                                <h4 className="d-flex justify-content-between align-items-center mb-3 border-bottom pb-3 border-dark">
                                    Your Order Summary
                                </h4>
                                <p>Total Bill:<strong> Rs {getTotalAmount()+39}</strong></p>
                                <p>Delivery Address:</p>
                                <ListGroup as="ol" numbered>
                                    {food_item.filter((item) => cartItems[item.id] > 0).map((item) => (
                                        <ListGroup.Item key={item.id} className="d-flex flex-column flex-sm-row justify-content-between align-items-start">
                                            
                                            <div className="text-sm-start ms-sm-2 me-sm-auto">
                                                <h6 >{item.name}</h6>
                                                <p className="text-secondary my-0">{item.description}</p>
                                                <small>Quantity: {cartItems[item.id]}</small>
                                            </div>
                                            <span className="text-muted">₹ {item.price}</span>
                                        </ListGroup.Item>
                                    ))}
                                </ListGroup>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Button variant="success" onClick={handleClick}>Back to Home</Button>
            </div>
        </Container>
    )
}
export default Order;