import React, {useState} from 'react'
import {Button, Container, Modal, Nav, Navbar} from 'react-bootstrap'

function NavbarComponent() {
    const [show, setShow] = useState(false)
    return (
        <>
        <Navbar expand="sm">
            <Navbar.Brand href="/">CozyThreads</Navbar.Brand>
            <Navbar.Toggle/>
            <Navbar.Collapse className="justify-content-end">
                <Button onClick={()=> setShow(true)}>Cart 0 Items</Button>
            </Navbar.Collapse>
        </Navbar>
<Modal show={show} onHide={() => setShow(false)}>
<Modal.Header closeButton>
<Modal.Title>Shopping cart</Modal.Title>
<Modal.Body>Body</Modal.Body>
</Modal.Header>
</Modal>
</>
      );
}

export default NavbarComponent;
