import React, {useState, useContext} from 'react'
import {Button, Container, Modal, Nav, Navbar} from 'react-bootstrap'
import { CartContext } from '../../contexts/CartContext';

function NavbarComponent() {
    const [show, setShow] = useState(false)
    const {items, totalCost} = useContext(CartContext)
    const productCount = items.reduce((sum, product)=> sum + product.quantity, 0)

    return (
        <>
        <Navbar expand="sm">
            <Navbar.Brand href="/">CozyThreads</Navbar.Brand>
            <Navbar.Toggle/>
            <Navbar.Collapse className="justify-content-end">
                <Button onClick={()=> setShow(true)}>{`Cart (${productCount} ${productCount === 1 ? 'item' : 'items'})`}</Button>
            </Navbar.Collapse>
        </Navbar>
<Modal show={show} onHide={() => setShow(false)}>
<Modal.Header closeButton>
<Modal.Title>Cart({productCount} items)</Modal.Title>
<Modal.Body>
    {productCount > 0 ?
    <>
    <h2>Items in your cart:</h2>
    {items.map((product, i) => (
        <h1>{product.title}</h1>
    ))}

    <h1>Total: ${totalCost.toFixed(2)}</h1>
    </>
    :
    <h2>There are no items in your cart!</h2>
    }
</Modal.Body>
</Modal.Header>
</Modal>
</>
      );
}

export default NavbarComponent;
