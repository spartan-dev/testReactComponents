import React from 'react'

const Card = ({title, director}) => {
    return (
        <div>
            <h2>
                <p>{title}</p>
            </h2>
            <p>{director}</p>
        </div>
    )
}

export default Card
