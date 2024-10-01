import React from 'react'
import {Card, Button} from 'react-bootstrap'

function ProductItem({product}) {

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
                            <Button>Add to cart</Button>
                        </Card.Footer>
                    </Card>
                </div>

    );
}

export default ProductItem;
