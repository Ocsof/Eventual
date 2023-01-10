import React from 'react';

function EventCard({title, imageUrl, body}) {
    return (
        <div className='event-container'>
            <div className='image-container'>
                <img src={imageUrl} alt="" />
            </div>
            <div className='event-content'>
                <div className='event-title'>
                    <h3>{title}</h3>
                </div>
                <div className='event-body'>
                    <p>{body}</p>
                </div>
            </div>
            <div className='btn'>
                <button><a>View more</a></button>
            </div>
        </div>
    )
}

export default EventCard;