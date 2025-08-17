import { StoreContext } from "../contextapi/ContextAPI";
import { useContext } from "react";
import { Container, ListGroup, Button, Card, Col, Row, Modal, ModalFooter } from "react-bootstrap";
import '../style.css'
import { useNavigate } from "react-router-dom";
import CartItem from "../component/CartItem";

const Cart = () => {
    const { cartItems, food_item, getTotalAmount, handleDelete, delConfirm, showDelConfirm, totalQuantity, delItemImage } = useContext(StoreContext);
    const navigate = useNavigate();

    return (
        <div className='pb-5'>
            {
                Object.keys(cartItems).length > 0 ? (
                    <>
                        <h2 className='text-center mb-5 bg-warning bg-opacity-50 my-4 p-2'><i className="bi bi-fork-knife me-2 fs-3"></i>Your Plate <i className="bi bi-cup-hot-fill ms-2"></i></h2>
                        <Container className="py-4">
                            <Row className="g-5">
                                <Col md={7} lg={8} >
                                    <h4 className="d-flex justify-content-between align-items-center mb-3">
                                        <span >Food Items </span>
                                        <span className="badge bg-warning-subtle text-dark">{totalQuantity()}</span>
                                    </h4>
                                    <ListGroup className="d-grid gap-2">
                                        {
                                            food_item.filter((item) => cartItems[item.id] > 0)
                                                .map((item) => (
                                                    <CartItem key={item.id} id={item.id} name={item.name} image={item.image} price={item.price} description={item.description} itemObj={item} />
                                                ))
                                        }
                                    </ListGroup>
                                </Col>

                                <Col md={5} lg={4}>
                                    <Card className="border-warning border-2 rounded-4">
                                        <Card.Body>
                                            <Card.Title className="border-bottom fs-4 border-3 border-warning pb-2">
                                                   <i className="bi bi-tag-fill text-secondary"></i> Price Details</Card.Title>
                                            
                                            <div className="d-flex justify-content-between border-bottom border-dark pt-2 ">
                                                <p>Total Price</p>
                                                <span>₹ {getTotalAmount()} </span>
                                            </div>
                                            <div className="d-flex justify-content-between border-bottom border-dark py-2">
                                                <div>
                                                    <p className="my-0">Delivery partner fee</p>
                                                    <small className="text-secondary">Distance Fee</small>
                                                </div>
                                                <span>₹ 29</span>
                                            </div>
                                            <div className="d-flex justify-content-between border-bottom border-dark py-2">
                                                <div className="d-flex flex-column">
                                                    <p className="my-0">Tax & Charges</p>
                                                    <small className="text-secondary">CGST Fee: ₹2.50</small>
                                                    <small className="text-secondary">SGST Fee: ₹2.50</small>
                                                </div>
                                                <span>₹ 5.00</span>
                                            </div>
                                            <div className="d-flex justify-content-between border-bottom border-dark pt-2">
                                                <p>Packaging Charges</p>
                                                <span>₹ 5.00 </span>
                                            </div>
                                            <div className="d-flex justify-content-between pt-2">
                                                <p className="fw-bold">Order Total</p>
                                                <strong>₹ {getTotalAmount() + 39} </strong>
                                            </div>
                                            <Button className="w-100 mt-4 custom-button-color" onClick={() => navigate('/checkout')}>
                                                Proceed to Checkout
                                            </Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </>
                ) : (
                    <Container className=" d-flex flex-column justify-content-center align-items-center center-section" >
                        <h2 className="text-center">
                            Oops! Your Plate is Empty
                        </h2>
                        <Button variant="warning" className="mt-5" onClick={() => navigate('/menu')}>
                            Browse Menu
                        </Button>
                    </Container>
                )
            }
            <Modal
                show={delConfirm}
                onHide={() => showDelConfirm(false)}
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body className="d-flex flex-column gap-3 p-3 mt-2 mx-2">
                    <Row className="align-items-center">
                        {delItemImage && (
                            <div className="col-12 col-md-4 mb-3 mb-md-0 text-center">
                                <img src={delItemImage} alt="Item to be removed" className="img-fluid" width="150px" height="120px" />
                            </div>
                        )}
                        <div className="col-12 col-md-8">
                            <h5>Remove from Plate?</h5>
                            <p>Are you sure you want to remove this food item from your plate?</p>
                        </div>
                    </Row>
                </Modal.Body>

                <ModalFooter className="flex-nowrap p-0">
                    <Button className="bg-transparent text-secondary border-0 col-6 py-3 m-0 rounded-0 border-end" onClick={() => showDelConfirm(false)} >
                        Cancel
                    </Button>

                    <Button
                        className="bg-transparent text-danger border-0 col-6 py-3 m-0 rounded-0"
                        onClick={handleDelete}
                    >
                        Remove
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}
export default Cart;