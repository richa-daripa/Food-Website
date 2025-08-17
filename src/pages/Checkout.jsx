import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Alert, Col, Container, ListGroup, Row, Form, Modal } from 'react-bootstrap';
import { StoreContext } from '../contextapi/ContextAPI';
import { timeOptions, mealCategory } from '../data';
import { useForm } from 'react-hook-form';

const Checkout = () => {
    const { getTotalAmount, totalQuantity } = useContext(StoreContext);
    const [showPlacedOrder, setShowPlacedOrder] = useState(false);
    const navigate = useNavigate();

    const [mealType, setMealType] = useState('Breakfast');
    const handleMealChange = (e) => {
        setMealType(e.target.value);
    }
    const [formData, setFormData] = useState(null);
    /*
        const handleSubmit = (e) => {
            e.preventDefault();
            if (e.target.checkValidity()) {
                setShowPlacedOrder(true);
            } else {
                e.target.reportValidity();
            }
        }*/

    const { register, handleSubmit, formState: { errors }, watch, setValue } = useForm();

    useEffect(() => {
        if (mealType !== 'PreOrder') {
            const today = new Date().toISOString().split('T')[0];
            setValue('on', today);
        }
    }, [mealType])

    const onSubmit = (data) => {
        console.log('Form Data:', data);
        setFormData(data);
        setShowPlacedOrder(true);
    };
    const selectedPayments = watch('payment');


    return (
        <Container className='my-5'>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Row className="g-3">
                    <Col md={7} lg={8} className='p-4'>
                        <h4 className="mb-3"><i className="bi bi-geo-alt-fill me-2"></i>Delivery Address</h4>

                        <Row className='g-3'>
                            <div className="col-sm-6">
                                <label className="form-label">First name</label>
                                <input type="text" className="form-control" {...register('firstName')} required />
                            </div>
                            <div className="col-sm-6">
                                <label className="form-label">Last name</label>
                                <input type="text" className="form-control" {...register('lastName')} required />
                            </div>
                            <div className="col-12">
                                <label className="form-label">Email</label>
                                <input type="email" className="form-control" value='abc@gmail.com' {...register('email')} disabled readOnly />
                            </div>
                            <div className="col-12">
                                <label className="form-label">Address line 1</label>
                                <input type="text" className="form-control" placeholder="House/Apartment/Block" {...register('address')} required />
                            </div>
                            <div className="col-12">
                                <label className="form-label">Address line 2</label>
                                <input type="text" className="form-control" placeholder="Street/Area/Locality" {...register('address2')} required />
                            </div>
                            <div className=" col-md-5">
                                <label className="form-label">Phone no.</label>
                                <div className='input-group'>
                                    <span className="input-group-text">+91</span>
                                    <input type="text" className="form-control"  {...register('phone')} required></input>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <label className="form-label">State</label>
                                <select className="form-select"  {...register('state')} required>
                                    <option value="" disabled selected>Select</option>
                                    <option value="Chennai">Chennai</option>
                                    <option value="Hyderabad">Hyderabad</option>
                                    <option value="Mumbai">Mumbai</option>
                                </select>
                            </div>
                            <div className="col-md-3">
                                <label className="form-label">Pincode</label>
                                <input type="text" className="form-control" {...register('pincode')} required />
                            </div>
                        </Row>
                        <Row className='g-3 mt-5'>
                            <h4>Delivery Timeslot</h4>
                            <Alert className='bg-info-subtle'>
                                <p className='text-secondary'><i className="bi bi-info-circle-fill me-2 text-primary"></i>
                                    Our Home Chef will start preparing only after you place the order.
                                    The available slots are displayed below.
                                </p>
                            </Alert>
                            <div className='col-md-4'>
                                <label className="form-label">For</label>
                                <select className="form-select"  {...register('mealType')} onChange={handleMealChange} required>
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
                                <select className="form-select" {...register('timeSlot')} required>
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
                                        <label className="form-label">Select date</label>
                                        <input type="date" className='w-100 p-1 text-muted rounded-1 border-1' {...register('on')} required />
                                    </div>
                                )
                            }

                        </Row>
                    </Col>
                    <Col md={5} lg={4} className="p-4 rounded-4 bg-warning bg-opacity-50">
                        <h4 className="d-flex justify-content-between  mb-3">
                            Total Bill
                        </h4>
                        <ListGroup>
                            <ListGroup.Item className='d-flex justify-content-between'>
                                <div>
                                    <h6 className="my-0 fw-light">Total Food Items</h6>
                                </div>
                                <span>{totalQuantity()}</span>
                            </ListGroup.Item>
                            <ListGroup.Item className='d-flex justify-content-between'>
                                <div>
                                    <h6 className="my-0 fw-light">Total Price</h6>
                                </div>
                                <span >₹{getTotalAmount()}</span>
                            </ListGroup.Item>
                            <ListGroup.Item className='d-flex justify-content-between'>
                                <div>
                                    <h6 className="my-0 fw-light">Additional charges</h6>
                                    <small className="text-body-secondary">Including tax, packaging and delivery charges</small>
                                </div>
                                <span>₹39</span>
                            </ListGroup.Item>

                            <ListGroup.Item className='d-flex justify-content-between'>
                                <span>Grand Total</span> <strong>₹{getTotalAmount() + 39}</strong>
                            </ListGroup.Item>
                        </ListGroup>

                        <div className="col-md-12 mt-5">
                            <label className="form-label custom-text-color ">Special Instuctions <small className="text-secondary">(Optional)</small></label>
                            <input type="text" className="form-control " placeholder='Prefer "less spicy"' {...register('instruction')} />
                        </div>
                        <h4 className="mb-3 mt-5 mb-4"><i className="bi bi-wallet-fill me-2"></i>Payment Method</h4>
                        <small className='text-muted'>Select any one payment mode</small>
                        <div className='col-12 mb-4'>
                            <input type="radio" className="btn-check" id="btn-checkbox" value="Card/UPI"
                                {...register('payment', { required: 'Please select a payment method' })}
                            />
                            <label className="btn btn-outline-dark w-100 text-start" htmlFor="btn-checkbox"><i className="bi bi-credit-card me-3"></i>Pay through Card/UPI</label>
                        </div>
                        <div className='col-12'>
                            <input type="radio" className="btn-check " id="btn-checkbox2" value="Cash on Delivery"
                                {...register('payment')} />
                            <label className="btn btn-outline-dark w-100 text-start" htmlFor="btn-checkbox2"><i className="bi bi-cash me-3"></i>Cash on Delivery</label>
                        </div>
                        {errors.payment && (
                            <div className="text-danger mt-2">{errors.payment.message}</div>
                        )}


                        <div className='col-12 d-grid gap-3 mt-5'>
                            <Button className='w-100 custom-button-color' type='submit'>Place Order</Button>
                            <Button variant='warning' className="w-100" onClick={() => navigate('/cart')}>Back to Plate</Button>
                        </div>
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
                            <i className="bi bi-check2-circle text-success me-2"></i>Order placed successfully!</h4>
                        <Button className="bg-success border-0" onClick={() => navigate('/order', { state: formData })}>
                            Check Order Details
                        </Button>
                    </div>
                </Modal.Body>
            </Modal>
        </Container>
    )
}
export default Checkout;