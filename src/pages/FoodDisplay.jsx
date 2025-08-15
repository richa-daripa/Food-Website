import React, { useContext, useState } from 'react'
import { StoreContext } from '../contextapi/ContextAPI';
import DishCard from '../component/DishCard';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Row, Col, Button, Form, Toast } from 'react-bootstrap';
import '../style.css'

const sortingOptions = {
    null: 'Default Ordering',
    asc: 'Sort by price: Low to High',
    desc: 'Sort by price: High to Low',
};

const FoodDisplay = () => {
    const { food_item } = useContext(StoreContext);
    const [visibleItemCount, setVisibleItemCount] = useState(12);
    const [order, setOrder] = useState(null);
    const [show, setShow] = useState(false);

    const location = useLocation();
    const [category, setCategory] = useState('All Menu');

    useEffect(() => {
        if (location.state?.category) {
            setCategory(location.state.category);
        }
    }, [location.state]);

    const filteredItems = food_item.filter((i) => category === "All Menu" || category === i.category);

    const handleLoadMore = () => {
        setVisibleItemCount((prev) => prev + 8);
    }

    const sortedItems = order ? [...filteredItems].sort((a, b) => order === 'asc' ? a.price - b.price : b.price - a.price) : filteredItems;

    const handleChange = (e) => {
        const selected = e.target.value;
        setOrder(selected === 'null' ? null : selected);
    };


    return (
        <Container fluid className='bg-custom-color py-5'>
            <h2 className='text-center mb-4'>{category.toUpperCase()}</h2>
            <div className="container d-flex justify-content-center align-items-center mt-2 translate-middle position-fixed start-50 top-20"
                style={{ zIndex: '1090' }}>
                <Toast onClose={() => setShow(false)} show={show} delay={1000} autohide className='z-3 rounded-5'>
                    <Toast.Body className='text-center bg-success text-white rounded-5 px-5'> <i className="bi bi-check-circle-fill me-2"></i>Added To Plate</Toast.Body>
                </Toast>
            </div>

            <Container className='mb-5'>
                <hr className='text-dark pb-4' />
                <Row className='justify-content-between align-items-center mb-5'>
                    <div className='col-auto'>
                        <p className='fs-5 '>Showing {filteredItems.length} result</p>
                    </div>
                    <div className='col-auto '>
                        <Form.Select onChange={handleChange}>
                            {Object.entries(sortingOptions).map(([key, label]) => (
                                <option key={key} value={key}>
                                    {label}
                                </option>
                            ))}
                        </Form.Select>
                    </div>
                </Row>
                <Row className="justify-content-center g-5">
                    {
                        sortedItems.slice(0, visibleItemCount).map((i, index) => (
                            <Col key={index} xs={12} sm={6} md={4} lg={3} className="d-flex justify-content-center">
                                <DishCard key={i.id} id={i.id} name={i.name} image={i.image} price={i.price} description={i.description} setShow={setShow} />
                            </Col>
                        )
                        )
                    }
                </Row>
            </Container>
            {
                visibleItemCount < filteredItems.length && (
                    <div className="text-center mt-5">
                        <Button className=" border-1 rounded-0 bg-warning text-secondary" onClick={handleLoadMore}>Load More</Button>
                    </div>
                )
            }


        </Container>
    )
}
export default FoodDisplay;