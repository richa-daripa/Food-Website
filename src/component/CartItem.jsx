import { StoreContext } from "../contextapi/ContextAPI";
import { useContext } from "react";
import { ListGroup, Row, Col, Button } from "react-bootstrap";

const CartItem = ({ id, name, image, price, description, itemObj }) => {
    const { cartItems, addToCart, removeFromCart, handleDeleteConfirm } = useContext(StoreContext);
    return (

        <ListGroup.Item className="border rounded-2 p-3">
            <Row className="align-items-center g-3">
                <Col xs={6} md="auto" className="text-center">
                    <img src={image} alt="" width="160" height="140" className="img-fluid" />
                </Col>
                <Col xs={6} md={4}>
                    <h5 >{name}</h5>
                    <p className="text-secondary d-block text-wrapping fs-6">{description}</p>
                    <span className="d-block fs-5">₹ {price}</span>
                </Col>
                <Col xs={6} md className=" d-flex justify-content-center align-items-center ">
                    <Button variant="outline-secondary bg-body-secondary text-black" className="btn-sm" onClick={()=>removeFromCart(id)}>
                        <i className="bi bi-dash"></i>
                    </Button>
                    <span className="mx-2 text-center">Qty {cartItems[id]}</span>
                    <Button variant="outline-secondary bg-body-secondary text-black" className="btn-sm" onClick={()=>addToCart(id)}>
                        <i className="bi bi-plus"></i>
                    </Button>
                </Col>
                <Col xs={6} md="auto" className="text-center">
                    <Button className="bg-transparent border-0"><i className="bi bi-trash3 text-danger me-2" onClick={() => handleDeleteConfirm(itemObj)}></i></Button>
                </Col>
            </Row>
        </ListGroup.Item>
    )
}
export default CartItem;