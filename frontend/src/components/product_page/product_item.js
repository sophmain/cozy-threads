import React, {useContext} from 'react'
import {Card, Button, Form} from 'react-bootstrap'
import { CartContext } from '../../contexts/CartContext';

function ProductItem({ product }) {
    const {getProductQuantity, addOneToCart, removeOneFromCart} = useContext(CartContext)
    const productQuantity = getProductQuantity(product.id)

    return (

                <div className="col-4 mb-4" key={product.name}>
                    <Card className="h-100">
                        <Card.Img variant="top" src={product.imageUrl} alt={product.name} />
                        <Card.Body>
                            <Card.Title className="font-weight-bold text-truncate">{product.name}</Card.Title>
                            <Card.Text>{product.price}</Card.Text>
                            <Card.Text className="truncate-text">{product.description}</Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            {productQuantity > 0 ? (
<Form className="d-flex justify-content-between">
    <Button onClick={()=>removeOneFromCart(product.id)} className="mx-1">-</Button>
    <Form.Label >In cart: {productQuantity}</Form.Label>
    <Button onClick={()=> addOneToCart(product.id)} className="mx-1">+</Button>
</Form>
                            ) : (
<Button onClick={()=> addOneToCart(product.id)}>Add to cart</Button>
                            )}

                        </Card.Footer>
                    </Card>
                </div>

    );
}

export default ProductItem;
