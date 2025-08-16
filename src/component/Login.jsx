import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Modal, Button, Container } from 'react-bootstrap';
import { isPwdValid } from '../data';

const Login = ({ showLogin, setShowLogin }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset, clearErrors
    } = useForm({ mode: 'onChange' });

    const [currState, setCurrState] = useState("Sign Up");
    const isSignUp = currState === "Sign Up";

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
            <Container className='mt-3'>
                <Modal.Header className='border-bottom-0' closeButton>
                    <Modal.Title >{currState}</Modal.Title>
                </Modal.Header>
                <Modal.Body >
                   
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {isSignUp &&
                            <div className="form-floating mb-3">
                                <input
                                    type="text" required
                                    className="form-control border-2" placeholder='Full Name'
                                    {...register('uname', {
                                        pattern: {
                                            value: /^[a-zA-Z\s]{5,}$/,
                                            message: 'Should contain only alphabets and spaces, and be at least 5 characters long',
                                        },
                                    })}
                                />
                                <label>Full Name</label>
                                {errors.uname && (
                                    <span className="error-msg">{errors.uname.message}</span>
                                )}
                            </div>
                        }
                        <div className="form-floating mb-3">
                            <input
                                type="email" required
                                className="form-control border-2" placeholder='Email'
                                {...register('email')}
                            />
                            <label >Email</label>
                        </div>
                        <div className="form-floating mb-4">
                            <input
                                type="password" required
                                className="form-control border-2" placeholder='Password'
                                {...register('passwd', {
                                    validate: isPwdValid,
                                })}
                            />
                            <label >Password</label>
                            {errors.passwd && isSignUp && (
                                <span className="error-msg">{errors.passwd.message}</span>
                            )}
                        </div>

                        <Button className='w-100 custom-button-color' type='submit'>
                            {isSignUp ? "Create Account" : "Login"}
                        </Button>

                        {!isSignUp ?
                            <>
                                <p className="text-center text-secondary my-3 fs-5">or</p>
                                <Button variant="outline-dark w-100" className='mb-3 rounded-3'>
                                    <i className="bi bi-google me-2"></i>
                                    Sign in with Google
                                </Button>
                                <p className="my-3 text-muted">New to Eatzio? <span className='custom-text-color custom-toggle fw-semibold' onClick={() => setCurrState("Sign Up")}>SignUp</span></p>
                            </> :
                            <>
                                <small className="text-secondary">By SignUp, you agree to the terms of use.</small>
                                <p className="my-3 text-muted ">Already have an account? <span className='custom-text-color custom-toggle fw-semibold' onClick={() => setCurrState("Login")}>Login</span></p>
                            </>
                        }
                    </form>
                </Modal.Body>
            </Container>
        </Modal>
    );
};
export default Login;