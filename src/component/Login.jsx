import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Modal, Button, Container } from 'react-bootstrap';
import { AuthContext } from '../contextapi/AuthContext';
import { FcGoogle } from "react-icons/fc";

const Login = ({ showLogin, setShowLogin, forwardTo }) => {
    const {
        register,
        handleSubmit,
        reset,
    } = useForm({ mode: 'onChange' });

    const handleClose = () => {
        setShowLogin(false);
        reset();
    };

    const [showLogError, setShowLogError] = useState(false);
    const { login } = useContext(AuthContext);

    const onSubmit = (data) => {
        console.log("Form Data:", data);
        const success = login(data);
        if (!success) {
            setShowLogError(true);
            setTimeout(() => {
                setShowLogError('');
            }, 4000)
        } else {
            handleClose();
        }

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
                    <Modal.Title className='fs-2'>Welcome back! <br />Login to your account</Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    {
                        showLogError && (
                            <span className='d-block text-center text-danger mb-4'><i className="bi bi-exclamation-triangle-fill me-3 text-danger"></i>
                                Invalid email or password
                            </span>
                        )
                    }

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

                        <div class="d-flex align-items-center my-4">
                            <hr class="flex-grow-1 border-secondary" />
                            <p class="fs-6 text-center login-style mx-5 mb-0">OR</p>
                            <hr class="flex-grow-1 border-secondary" />
                        </div>

                        <Button variant="outline-dark w-100" className='mb-3 rounded-3 d-flex align-items-center justify-content-center'>
                            <FcGoogle size={22} className='me-2'/>
                            Continue with Google
                        </Button>
                        <p className="mt-4 mb-0 text-center">New to Eatzio? <span className='custom-text-color custom-toggle' onClick={() => forwardTo()}>Sign Up</span></p>

                    </form>
                </Modal.Body>
            </Container>
        </Modal>
    );
};
export default Login;