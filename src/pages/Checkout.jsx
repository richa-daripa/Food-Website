import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Alert, Col, Container, ListGroup, Row, Form, Modal } from 'react-bootstrap';
import { StoreContext } from '../contextapi/ContextAPI';

const timeOptions = {
    Breakfast: ['7:00 AM', '8:00 AM', '9:00 AM'],
    Lunch: ['12:00 PM', '1:00 PM', '2:00 PM'],
    Snacks: ['4:00 PM', '5:00 PM'],
    Dinner: ['9:00 PM', '10:00 PM', '11:00 PM'],
    PreOrder: ['7:00 AM', '12:00 PM', '4:00 PM', '9:00 PM'],
};

const mealCategory = ['Breakfast', 'Lunch', 'Snacks', 'Dinner', 'PreOrder'];

const Checkout = () => {
    const { getTotalAmount, totalQuantity } = useContext(StoreContext);
    const [showPlacedOrder, setShowPlacedOrder] = useState(false);
    const navigate = useNavigate();

    const [mealType, setMealType] = useState('Breakfast');
    const handleMealChange = (e) => {
        setMealType(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (e.target.checkValidity()) {
            setShowPlacedOrder(true);
        } else {
            e.target.reportValidity();
        }
    }

    return (
        <Container className='my-5'>
            <Form onSubmit={handleSubmit}>
                <Row className="g-3">
                    <Col md={7} lg={8} className='p-4'>
                        <h4 className="mb-3"><i className="bi bi-geo-alt-fill me-2"></i>Delivery Address</h4>

                        <Row className='g-3'>
                            <div className="col-sm-6">
                                <label for="firstName" className="form-label">First name</label>
                                <input type="text" className="form-control" id="firstName" required />
                            </div>
                            <div className="col-sm-6">
                                <label for="lastName" className="form-label">Last name</label>
                                <input type="text" className="form-control" id="lastName" required />
                            </div>
                            <div className="col-12">
                                <label for="email" className="form-label">Email</label>
                                <input type="email" className="form-control" id="email" value='abc@gmail.com' disabled readOnly />
                            </div>
                            <div className="col-12">
                                <label for="address" className="form-label">Address</label>
                                <input type="text" className="form-control" id="address" placeholder="House/Apartment/Block" required />
                            </div>
                            <div className="col-12">
                                <label for="address2" className="form-label">Address 2 <span className="text-body-secondary">(Optional)</span></label>
                                <input type="text" className="form-control" id="address2" placeholder="Street/Area/Locality" required />
                            </div>
                            <div className=" col-md-5">
                                <label for="phone" className="form-label">Phone no.</label>
                                <div className='input-group'>
                                    <span className="input-group-text">+91</span>
                                    <input type="text" className="form-control" required></input>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <label for="state" className="form-label">State</label>
                                <input type="text" className="form-control" id="state" placeholder='Mumbai' disabled />
                            </div>
                            <div className="col-md-3">
                                <label for="zip" className="form-label">Pincode</label>
                                <input type="text" className="form-control" id="zip" required />
                            </div>
                        </Row>
                        <Row className='g-3 mt-5'>
                            <h4>Delivery Timeslot</h4>
                            <Alert className='bg-info-subtle'>
                                <p className='text-muted'><i className="bi bi-info-circle-fill me-2"></i>
                                    Our Home Chef will start preparing only after you place the order.
                                    The available delivery slots are displayed below.
                                </p>
                            </Alert>
                            <div className='col-md-4'>
                                <label className="form-label">For</label>
                                <select className="form-select" onChange={handleMealChange} required>
                                    <option value="" disabled selected>Select meal type</option>
                                    {
                                        mealCategory.map(i => (
                                            <option value={i}>{i}</option>
                                        ))
                                    }
                                </select>
                            </div>

                            <div className='col-md-4'>
                                <label className="form-label">Select time</label>
                                <select className="form-select" required>
                                    <option value="" disabled selected>Set delivery time</option>
                                    {
                                        timeOptions[mealType]?.map((i, index) => (
                                            <option key={index} value={i}>{i}</option>
                                        ))
                                    }
                                </select>
                            </div>
                            {
                                mealType === 'PreOrder' && (
                                    <div className='col-md-4'>
                                        <label for="on" className="form-label">Select date</label>
                                        <input type="date" className='w-100 p-1 text-muted rounded-1 border-1' required/>
                                    </div>
                                )
                            }

                        </Row>
                    </Col>
                    <Col md={5} lg={4} className="p-4 rounded-4 bg-warning bg-opacity-50">
                        <h4 className="d-flex justify-content-between align-items-center mb-3">
                            Total Bill
                        </h4>
                        <ListGroup>
                            <ListGroup.Item className='d-flex justify-content-between'>
                                <div>
                                    <h6 className="my-0">Total Food Items</h6>
                                </div>
                                <span className="text-body-secondary">{totalQuantity()}</span>
                            </ListGroup.Item>
                            <ListGroup.Item className='d-flex justify-content-between'>
                                <div>
                                    <h6 className="my-0">Total Price</h6>
                                    <small className="text-body-secondary">including tax and other charges</small>
                                </div>
                                <span className="text-body-secondary">₹ {getTotalAmount()}</span>
                            </ListGroup.Item>

                            <ListGroup.Item className='d-flex justify-content-between'>
                                <span>Grand Total</span> <strong>₹ {getTotalAmount() + 39}</strong>
                            </ListGroup.Item>
                        </ListGroup>

                        <div className="col-md-12 mt-5">
                            <label className="form-label text-danger">Special Instuctions</label>
                            <input type="text" className="form-control " placeholder='Like prefer "less spicy"' required />
                        </div>
                        <h4 className="mb-3 mt-5 mb-4"><i className="bi bi-wallet-fill me-2"></i>Payment Method</h4>
                        <small className='text-muted'>Select any one payment mode</small>
                        <div className='col-12 mb-4'>
                            <input type="checkbox" className="btn-check" id="btn-check-outlined" />
                            <label className="btn btn-outline-dark w-100 text-start" for="btn-check-outlined"><i className="bi bi-credit-card me-3"></i>Pay through Card/UPI</label>
                        </div>
                        <div className='col-12'>
                            <input type="checkbox" className="btn-check " id="btn-check-2-outlined" />
                            <label className="btn btn-outline-dark w-100 text-start" for="btn-check-2-outlined"><i className="bi bi-cash me-3"></i>Cash on Delivery</label>
                        </div>
                        <Button variant='danger w-100 mt-5' type='submit'>Place Order</Button>
                        <hr />
                        <Button className='bg-warning-subtle text-dark w-100 mt-5' onClick={() => navigate('/cart')}>Back to Plate</Button>
                    </Col>
                </Row>
            </Form>
            <Modal
                show={showPlacedOrder}
                onHide={() => setShowPlacedOrder(false)}
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body className="py-2 bg-success-subtle rounded-3">
                    <div className="d-flex flex-column justify-content-center align-items-center my-3">
                        <h4 className='text-center text-success mb-4'>
                            <i class="bi bi-check2-circle text-success me-2"></i>Order placed successfully</h4>
                        <Button className="bg-success border-0" onClick={() => navigate('/order')}>
                            Check Order Details
                        </Button>
                    </div>
                </Modal.Body>
            </Modal>
        </Container>
    )
}
export default Checkout;