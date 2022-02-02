import React from 'react';

import './Card.css'

const Card = props => {
    const classList = `Card ${props.classList}`

    return (
        <div className={classList}>{props.children}</div>
    );
};

export default Card;