import {Card} from "react-bootstrap";
import * as React from "react";

export type EventCardProps = {
    id: number,
    title: string,
    author: string,
    category: string,
    date: string,
    description: string,
    imgUrl: string
}

export function Event({id, title, author, category, date, description, imgUrl}:EventCardProps){

    return (
        <Card key={id}>
            <Card.Img
                variant="top"
                src={imgUrl}
                height="200px"
                style={{ objectFit: "cover" }}
            />
            <Card.Body className="d-flex flex-column">
                <Card.Title className="d-flex justify-content-between align-items-baseline mb-2">
                    <span className="fs-2">{title}</span>
                    <span className="ms-2 text-muted">{author}</span>
                </Card.Title>
                <Card.Text className="mt-auto">
                    <span className="fs-2">{category}</span>
                    <br/>
                    <span className="fs-4">{description}</span>
                    <br/>
                    <input type="date" value={date} disabled={true}/>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}