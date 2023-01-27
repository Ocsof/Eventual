import {Card} from "react-bootstrap";
import * as React from "react";

type EventCardProps = {
    title: string,
    author: string,
    category: string,
    date: string,
    description: string,
    imgUrl: string
}

export function Event({title, author, category, date, description, imgUrl}:EventCardProps){

    return (
        <Card className="h-100">
            <Card.Img
                variant="top"
                src={imgUrl}
                height="200px"
                style={{ objectFit: "cover" }}
            />
            <Card.Body className="d-flex flex-column">
                <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
                    <span className="fs-2">{title}</span>
                    <span className="ms-2 text-muted">{author}</span>
                </Card.Title>
                <div className="mt-auto">
                    <span className="fs-2">{category}</span>
                    <br/>
                    <span className="fs-4">{description}</span>
                    <input type="date" value={date}/>
                </div>
            </Card.Body>
        </Card>
    )
}