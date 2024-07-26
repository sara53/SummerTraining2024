import React from 'react'
import { Button, Card } from 'react-bootstrap'

export function ProductCard() {
    return (
        <div className="col-sm-6 col-md-3">
            <Card >
                <Card.Img variant="top" src="https://images.pexels.com/photos/885021/pexels-photo-885021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                <Card.Body>
                    <Card.Title>Coffee</Card.Title>
                    <Card.Text>
                        Some quick example text
                    </Card.Text>
                    <Button variant="dark">Buy Now</Button>
                </Card.Body>
            </Card>

        </div>
    )
}
