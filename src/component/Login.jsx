import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Modal, Button, Container } from 'react-bootstrap';

const Login = ({ showLogin, setShowLogin }) => {
    const {
        register,
        handleSubmit,
        reset, clearErrors
    } = useForm({ mode: 'onChange' });

    const handleClose = () => {
        setShowLogin(false);
        reset();
        clearErrors();
    };

    const onSubmit = (data) => {
        console.log("Form Data:", data);
        handleClose();
    };

    return (
        <Modal
            show={showLogin}
            onHide={handleClose}
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Container className='my-3'>
                <Modal.Header className='border-bottom-0' closeButton>
                    <Modal.Title >Welcome back! <br />Login to your account</Modal.Title>
                </Modal.Header>
                <Modal.Body >

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-floating mb-3">
                            <input
                                type="email" required
                                className="form-control border-2" placeholder='Email'
                                {...register('email')}
                            />
                            <label >Your email</label>
                        </div>
                        <div className="form-floating mb-4">
                            <input
                                type="password" required
                                className="form-control border-2" placeholder='Password'
                                {...register('passwd')}
                            />
                            <label >Your password</label>
                        </div>

                        <Button className='w-100 custom-button-color mt-3' type='submit'>
                            Log In
                        </Button>

                        <p className="fs-6 text-center text-secondary my-3 fs-5">or</p>
                        <Button variant="outline-dark w-100" className='mb-3 rounded-3'>
                            <i className="bi bi-google me-2"></i>
                            Continue with Google
                        </Button>
                        <p className="mt-4 text-center">New to Eatzio? <span className='custom-text-color custom-toggle' >Sign Up</span></p>

                    </form>
                </Modal.Body>
            </Container>
        </Modal>
    );
};
export default Login;