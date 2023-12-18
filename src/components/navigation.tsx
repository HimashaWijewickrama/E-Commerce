import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaShoppingCart } from "react-icons/fa";
import { TbJewishStarFilled } from "react-icons/tb";
import { TbTruckDelivery } from "react-icons/tb";
import { BiSolidUserCircle } from "react-icons/bi";
import { BiSearchAlt } from "react-icons/bi";
import { Link } from 'react-router-dom';

export const Navigation = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand href="#" style={{ fontWeight: 600 }}>Chenara Dodge</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1">Home</Nav.Link>
                        <Nav.Link href="#action2">New-In</Nav.Link>
                        <NavDropdown title="Shop Now" id="navbarScrollingDropdown">
                        <NavDropdown.Item as={Link} to="/tops">Tops</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">Pants</NavDropdown.Item>
                            <NavDropdown.Item href="#action5">Skirts</NavDropdown.Item>
                            <NavDropdown.Item href="/frocks">Frocks</NavDropdown.Item>
                            <NavDropdown.Item href="#action7">Rompers</NavDropdown.Item>
                            <NavDropdown.Item href="#action8">Jumpsuits</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action9">Fashion Accessories</NavDropdown.Item>
                        </NavDropdown>

                    </Nav>


                    <Form className="d-flex">
                        <Nav
                            className="me-auto"
                            navbarScroll
                        >
                            <Nav.Link href="#action1"><FaShoppingCart size={18} data-bs-toggle="tooltip" data-bs-placement="top" title="Cart"/></Nav.Link>
                            <Nav.Link href='#action2'><TbJewishStarFilled size={18} data-bs-toggle="tooltip" data-bs-placement="top" title="Favourites"/></Nav.Link>
                            <Nav.Link href='#action3'><TbTruckDelivery size={18} data-bs-toggle="tooltip" data-bs-placement="top" title="Track Order"/></Nav.Link>
                            <Nav.Link href='#action4'><BiSolidUserCircle size={18} data-bs-toggle="tooltip" data-bs-placement="top" title="Login"/></Nav.Link>


                        </Nav>
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success"><BiSearchAlt /></Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}