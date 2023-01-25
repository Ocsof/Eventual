import * as React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {StoreItem} from "./StoreItem"
// @ts-ignore
import storeItems from '../../data/items.json'

export function Store() {
    return (
        <>
            <h1>Events Store</h1>
            <Container>
                <Row md={2} xs={1} lg={3} className="g-3">
                    {storeItems.map((item: JSX.IntrinsicAttributes & { id: number; name: string; price: number; imgUrl: string; }) => (
                    <Col key={item.id}>
                        <StoreItem {...item}/>
                    </Col>
                    ))}
                </Row>
            </Container>
        </>
);
}