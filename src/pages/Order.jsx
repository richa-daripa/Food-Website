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
        <Container className="my-5 py-5">
            <div className="d-flex flex-column justify-content-center align-items-center gap-4">
                <i className="bi bi-patch-check-fill text-success display-4" ></i>
                <h2 className="text-center fw-bold">
                    Thank you for ordering
                </h2>
                <Container fluid className="py-4">
                    <Row className="justify-content-center">
                        <Col xs={12} md={6}>
                            <div className="shadow-sm p-4 rounded-3 border bg-success-subtle">
                                <h4 className="d-flex justify-content-between align-items-center mb-3">
                                    Order Summary
                                </h4>
                                <p>Total Bill:<strong> Rs {getTotalAmount()+39}</strong></p>
                                <p>Delivery Address:</p>
                                <p>Mode of Payment:</p>
                                <ListGroup as="ol" numbered>
                                    {food_item.filter((item) => cartItems[item.id] > 0).map((item) => (
                                        <ListGroup.Item key={item.id} className="d-flex justify-content-between align-items-start">
                                            <div className="ms-2 me-auto">
                                                <h6 className="my-0">{item.name}</h6>
                                                <small className="text-body-secondary">Qty: {cartItems[item.id]}</small>
                                            </div>
                                            <span className="text-body-secondary">₹ {item.price}</span>
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