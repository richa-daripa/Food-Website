import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Modal, Button, Container } from 'react-bootstrap';
import { isPwdValid } from '../data';

const SignUp = ({ showSignUp, setShowSignUp, forwardTo }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset, clearErrors
    } = useForm({ mode: 'onChange' });

    const [isFocused, setIsFocused] = useState(null);

    const handleClose = () => {
        setShowSignUp(false);
        reset();
        clearErrors();
    };

    const onSubmit = (data) => {
        console.log("Form Data:", data);
        handleClose();
    };

    const handleFocus = (inputField) => setIsFocused(inputField);
    const handleBlur = () => setIsFocused(null);

    return (
        <Modal
            show={showSignUp}
            onHide={handleClose}
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Container className='my-3'>
                <Modal.Header className='border-bottom-0' closeButton>
                    <Modal.Title className='fs-2'>Join us <br /> Create a Eatzio account</Modal.Title>
                </Modal.Header>
                <Modal.Body >

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-floating mb-3">
                            <input
                                type="text" required
                                className="form-control border-2" placeholder='Full Name'
                                {...register('uname', {
                                    pattern: {
                                        value: /^[a-zA-Z\s]{5,}$/,
                                        message: 'Enter first name and last name. Should contain only alphabets and spaces, and be at least 5 characters long',
                                    },
                                })}
                                onFocus={()=>handleFocus('uname')}
                                onBlur={handleBlur}
                            />
                            <label>Full Name</label>
                            {errors.uname && isFocused==='uname' &&(
                                <span className="error-msg">{errors.uname.message}</span>
                            )}
                        </div>

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
                                className="form-control border-2" placeholder='Your password'
                                {...register('passwd', {
                                    validate: isPwdValid,
                                })}
                                onFocus={()=>handleFocus('password')}
                                onBlur={handleBlur}
                            />
                            <label >Your password</label>
                            {errors.passwd && isFocused==='password' &&(
                                <span className="error-msg">{errors.passwd.message}</span>
                            )}
                        </div>

                        <Button className='w-100 custom-button-color mt-2' type='submit'>
                            Sign Up
                        </Button>

                        <small className="text-primary ms-2">By SignUp, you agree to the terms of use.</small>
                        <p className="mt-4 mb-0 text-center">Already have an account? <span className='custom-text-color custom-toggle' onClick={() => forwardTo()}>Log In</span></p>
                    </form>
                </Modal.Body>
            </Container>
        </Modal>
    );
};
export default SignUp;