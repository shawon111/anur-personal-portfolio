import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Container, FormControl, InputGroup, Nav, Navbar, OverlayTrigger, Popover } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../images/anur-logo.png';
import './Header.css';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className="primary-header pt-3" variant="dark">
            <Container>
                <Navbar>
                    <div className="logo">
                        <Link to="/">
                            <img src={logo} alt="anur-portfolio-template" className="logo-img" />
                        </Link>
                    </div>
                </Navbar>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="m-auto">
                        <div className="nav-link-container"><NavLink to="/" activeClassName="active-route" className="nav-link">Home</NavLink></div>
                        <div className="nav-link-container"><NavLink to="/about" activeClassName="active-route" className="nav-link">About</NavLink></div>
                        <div className="nav-link-container"><NavLink to="/portfolio" activeClassName="active-route" className="nav-link">Portfolio</NavLink></div>
                        <div className="nav-link-container"><NavLink to="/services" activeClassName="active-route" className="nav-link">Services</NavLink></div>
                        <div className="nav-link-container"><NavLink to="/blog" activeClassName="active-route" className="nav-link">Blog</NavLink></div>
                        <div className="nav-link-container"><NavLink to="/contact" activeClassName="active-route" className="nav-link">Contact</NavLink></div>
                    </Nav>
                    <Nav>
                        {/* header search bar */}
                        <>
                            {['bottom'].map((placement) => (
                                <OverlayTrigger
                                    trigger="click"
                                    key={placement}
                                    placement={placement}
                                    overlay={
                                        <Popover id={`popover-positioned-${placement}`}>
                                            <Popover.Body>
                                                <InputGroup className='search-form'>
                                                    <FormControl
                                                        className='search-field'
                                                        placeholder="Search here..."
                                                    />
                                                    <Button>
                                                        <FontAwesomeIcon icon={faSearch}/>
                                                    </Button>
                                                </InputGroup>

                                            </Popover.Body>
                                        </Popover>
                                    }
                                >
                                    <Button className='header-search-icon'><FontAwesomeIcon icon={faSearch} /></Button>
                                </OverlayTrigger>
                            ))}
                        </>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;