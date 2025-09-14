import { useContext, useState } from 'react';
import Login from './Login';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { StoreContext } from '../contextapi/ContextAPI';
import { Container, Nav, Navbar, Button, Offcanvas, Dropdown, DropdownDivider } from 'react-bootstrap';
import logo from '../assets/logo.png';
import '../style.css'
import SignUp from './SignUp';
import { AuthContext } from '../contextapi/AuthContext';

const NavBar = () => {
    const { totalQuantity} = useContext(StoreContext);
    const { user, logout} = useContext(AuthContext);
    const [showOffcanvas, setShowOffcanvas] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const [showSignUp, setShowSignUp] = useState(false);
    const navigate = useNavigate();

    const openLogin = () => {
        setShowLogin(true);
        setShowSignUp(false);
    }

    const openSignUp = () => {
        setShowLogin(false);
        setShowSignUp(true);
    }


    return (
        <Navbar bg="dark" data-bs-theme="dark" className='shadow-sm sticky-top'>
            <Container>
                <Navbar.Brand as={NavLink} to="/"> <img
                    src={logo}
                    width="150"
                    height="50"
                    className="d-inline-block align-top"
                    alt="EatZio"
                /></Navbar.Brand>

                <Offcanvas show={showOffcanvas} onHide={() => setShowOffcanvas(false)} placement="end" className="text-bg-dark w-75">
                    <Offcanvas.Header closeButton data-bs-theme="dark">
                        <Offcanvas.Title className='d-flex align-items-center'><i className="bi bi-person-circle text-secondary display-4 me-2"></i>Hi, Jannet</Offcanvas.Title>
                    </Offcanvas.Header>
                    <hr />
                    <Offcanvas.Body>
                        <Nav className="flex-column fs-5 ms-2 gap-2">
                            <Nav.Link as={NavLink} to="/about" className="text-warning">About</Nav.Link>
                            <Nav.Link as={NavLink} to="/menu" className="text-warning">Menu</Nav.Link>
                            <Nav.Link href="#contact" className="text-warning">Contact</Nav.Link>
                            <hr />

                            <Button className="custom-button-color" onClick={openLogin}>
                                Login
                            </Button>
                            <Button className="custom-button-color" onClick={openSignUp}>
                                Sign Up
                            </Button>
                            <Nav.Link as={NavLink} to="/cart" className="text-warning">My Plate <span className="badge text-bg-info">{totalQuantity()}</span></Nav.Link>
                            <Nav.Link href="#features" className='text-warning'>Log Out</Nav.Link>
                        </Nav>
                    </Offcanvas.Body>
                </Offcanvas>

                <Nav className="d-none d-lg-flex gap-4 mx-auto fs-5">
                    <Nav.Link as={NavLink} to="/about" className='navbar-text-color'>About</Nav.Link>
                    <Nav.Link as={NavLink} to="/menu" className='navbar-text-color'>Menu</Nav.Link>
                    <Nav.Link className='navbar-text-color'>Contact</Nav.Link>
                </Nav>


                <div className="d-none d-lg-flex gap-3 align-items-center">
                    {
                        user ? (
                            <>
                                <Button variant="warning" onClick={() => navigate('/cart')}
                                    className="position-relative ">My Plate
                                    <span className="position-absolute top-0 start-100 translate-middle rounded-circle fw-bold d-flex align-items-center justify-content-center number-badge">
                                        {totalQuantity()}
                                    </span>
                                </Button>
                                <Dropdown>
                                    <Dropdown.Toggle as="span" className='icon-pointer'>
                                        <i className="bi bi-person-circle fs-2 text-secondary"></i>
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu align="end" data-bs-theme="light">
                                        <p className='px-3'>Hi, {user.username}</p>
                                        <DropdownDivider />
                                        <Dropdown.Item ><i className="bi bi-bag-check-fill me-2"></i>Your Orders</Dropdown.Item>
                                        <Dropdown.Item ><i className="bi bi-headset me-2"></i>Help & Support</Dropdown.Item>
                                        <DropdownDivider />
                                        <Dropdown.Item onClick={logout}>Log Out</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </>

                        ) : (
                            <>
                                <Button className="custom-button-color" onClick={openLogin}>
                                    Login
                                </Button>
                                <Button variant='outline-warning' onClick={openSignUp}>
                                    Sign Up
                                </Button>
                            </>
                        )
                    }
                </div>

                <i className="bi bi-list fs-2 text-white d-flex d-lg-none" onClick={() => setShowOffcanvas(true)}></i>
            </Container>

            <Login showLogin={showLogin} setShowLogin={setShowLogin} forwardTo={openSignUp} />
            <SignUp showSignUp={showSignUp} setShowSignUp={setShowSignUp} forwardTo={openLogin} />
        </Navbar>

    )
}

export default NavBar;