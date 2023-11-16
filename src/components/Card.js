import React from 'react';
import './Card.css'
import { useState } from 'react';
function Card({ title, style }) {
    const [isOpen, setOpen] = useState(false);
    function handleClick() {
        setOpen(!isOpen)
    }
    return (
        <React.Fragment>
            {
                !isOpen && (
                    <div className='ClosedCard' style={style} onClick={handleClick}>
                        {title}
                    </div>
                )
            }
            {
                isOpen && (
                    <div className='OpenedCard' >
                        <button onClick={handleClick}>esc</button>
                        {title}

                    </div>
                )
            }


        </React.Fragment>
    )
}

export default Card;
