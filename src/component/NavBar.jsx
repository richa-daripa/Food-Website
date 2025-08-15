import { useContext, useState } from 'react';
import Login from './Login';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { StoreContext } from '../contextapi/ContextAPI';
import { Container, Nav, Navbar, Button, Offcanvas, Dropdown, DropdownDivider } from 'react-bootstrap';
import logo from '../assets/logo.png';
import '../style.css'

const NavBar = () => {
    const { totalQuantity } = useContext(StoreContext);
    const [showOffcanvas, setShowOffcanvas] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const navigate = useNavigate();
    

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

                <Offcanvas show={showOffcanvas} onHide={() => setShowOffcanvas(false)} placement="end" className="text-bg-dark w-50">
                    <Offcanvas.Header closeButton data-bs-theme="dark">
                        <Offcanvas.Title>Hi, Jannet</Offcanvas.Title>
                    </Offcanvas.Header>
                    <hr />
                    <Offcanvas.Body>
                        <Nav className="flex-column fs-5">
                            <Nav.Link href="#home" className="text-warning">About</Nav.Link>
                            <Nav.Link to className="text-warning">Menu</Nav.Link>
                            <Nav.Link href="#contact" className="text-warning">Contact</Nav.Link>
                            <hr />
                            <Nav.Link href="#features" className='text-warning'>My Cart</Nav.Link>
                            <Nav.Link href="#features" className='text-warning'>Logout</Nav.Link>
                        </Nav>
                    </Offcanvas.Body>
                </Offcanvas>

                <Nav className="d-none d-lg-flex gap-4 mx-auto fs-5">
                    <Nav.Link as={NavLink} to="/about" className='text-warning'>About</Nav.Link>
                    <Nav.Link as={NavLink} to="/menu" className='text-warning'>Menu</Nav.Link>
                    <Nav.Link  className='text-warning'>Contact</Nav.Link>
                </Nav>

                <Button variant="warning" className="me-2" onClick={() => setShowLogin(true)}>
                    Login
                </Button>

                <div className="d-none d-lg-flex gap-3 align-items-center">
                    <Button variant="warning" onClick={()=>navigate('/cart')}
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
                            <p className='px-3'>Hi, Jannet</p>
                            <DropdownDivider />
                            <Dropdown.Item >Logout</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>

                <i className="bi bi-list fs-2 text-white d-flex d-lg-none" onClick={() => setShowOffcanvas(true)}></i>
            </Container>

            <Login showLogin={showLogin} setShowLogin={setShowLogin} />

        </Navbar>

    )
}

export default NavBar;