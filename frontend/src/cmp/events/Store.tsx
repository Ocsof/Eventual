import * as React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {StoreItem} from "./StoreItem"
// @ts-ignore
import storeItems from '../../data/events_onsell.json'

export function Store() {
    return (
        <>
            <h1>Events Store</h1>
            <Container>
                <Row md={2} xs={1} lg={3} className="g-3">
                    {storeItems.map((item: JSX.IntrinsicAttributes & { id: number; title: string; author: string; category: string; date: string; description: string; imgUrl: string; price: number}) => (
                    <Col key={item.id}>
                        <StoreItem {...item}/>
                    </Col>
                    ))}
                </Row>
            </Container>
        </>
);
}