import React from 'react';
import { Button, Container, Form, InputGroup, Nav, Navbar, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { ReactComponent as MyIcon } from "../images/header-logo.svg";

function Header() {
  return (
    <div className='sticky-top'>
      <Navbar expand="sm" className="primary-bg-grey" data-bs-theme="dark">
        <Container fluid>
          <Navbar.Brand href="#">
            <MyIcon />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarToggle" className='fs-6 p-2 nav-search bi bi-search bg-body-tertiary rounded-5 box-shadow-none' />
          <div className="d-flex gap-3 order-sm-3 ">
            <Button variant="secondary  rounded-5" size="sm">
              <i className='bi bi-envelope'></i>
            </Button>
            <Button variant="secondary  rounded-5" size="sm">
              <i className='bi bi-gear'></i>
            </Button>
            <Button variant="secondary  rounded-5" size="sm">
              <i className='bi bi-bell'></i>
            </Button>
            <img src="https://github.com/mdo.png" alt="profile-img" width="30" height="30" className="rounded-circle"></img>
          </div >
          <Navbar.Collapse id="navbarToggle">
            <Nav className="me-auto my-lg-0 ms-5 ms-md-0" style={{ maxHeight: '100px' }} >
              <InputGroup className="mt-2 mt-sm-0 ms-md-3 ms-0" size="sm">
                <Button variant=" border-end-0 border border-light-subtle hover-none bg-body-tertiary" id="button-addon1 ">
                  <i className='bi bi-search'></i>
                </Button>
                <Form.Control
                  className='border-start-0 border border-light-subtle box-shadow-none ps-0 bg-body-tertiary'
                  placeholder='Search'
                />
              </InputGroup>
            </Nav>
          </Navbar.Collapse>
        </Container>

      </Navbar>

      {/* side nav starts here */}
      <div className="d-flex flex-column flex-shrink-0 primary-bg-grey position-fixed top-0 bottom-0 align-items-center" style={{ width: '60px' }}>
        <Navbar.Brand href="#" className='p-3'>
          <MyIcon />
        </Navbar.Brand>
        <div className='d-flex align-items-center justify-content-between flex-column h-100'>
        <Nav fill variant="tabs" className='border-0' defaultActiveKey="/home" >
          <Nav.Item className='mb-2'>
            <Nav.Link href="/home" className='side-nav-icon border-0 '><i className='bi bi-house fs-5'></i> <i className='bi bi-house-fill fs-5'></i></Nav.Link>
          </Nav.Item>
          <Nav.Item className='mb-2'>
            <Nav.Link eventKey="link-1" className='side-nav-icon border-0'><i className='bi bi-file-bar-graph fs-5'></i> <i className='bi bi-file-bar-graph-fill fs-5'></i></Nav.Link>
          </Nav.Item >
          <Nav.Item className='mb-2'>
            <Nav.Link eventKey="link-2" className='side-nav-icon border-0'><i className='bi bi-clipboard2-check fs-5'></i> <i className='bi bi-clipboard2-check-fill fs-5'></i></Nav.Link>
          </Nav.Item>
          <Nav.Item className='mb-2'>
            <Nav.Link eventKey="link-3" className='side-nav-icon border-0'><i className='bi bi-wallet2 fs-5'></i> <i className='bi bi-wallet2 fs-5'></i></Nav.Link>
          </Nav.Item>
          <Nav.Item className='mb-2'>
            <Nav.Link eventKey="link-4" className='side-nav-icon border-0'><i className='bi bi-bag-check fs-5'></i> <i className='bi bi-bag-check-fill fs-5'></i></Nav.Link>
          </Nav.Item>
        </Nav>
        
        <OverlayTrigger
          overlay={
            <Tooltip >
              Logout
            </Tooltip>
          }
        >
         <i className="bi bi-box-arrow-right text-light fs-5 mb-4" style={{cursor:'pointer'}}></i>
        </OverlayTrigger>
        
        </div>
      </div>
    </div>
  );
}

export default Header;