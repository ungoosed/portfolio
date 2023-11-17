import React, { useContext, useState } from 'react';
import './Card.css'
import { displayContext } from '../pages/Projects';
function Card({ title, style }) {
    const {isDisplayed, setDisplayed} = useContext(displayContext);
    const [isOpen, setOpen] = useState(false);
    function openCard() {
        setOpen(true)
        setDisplayed(false)
    }
    function closeCard() {
        setOpen(false)
        setDisplayed(true)
    }
    return (
        <React.Fragment>
                        {
                isDisplayed && (
                    <div className='HiddenCard'>
                    </div>
                )
            }
            {
                !isOpen && isDisplayed && (
                    <div className='ClosedCard' style={style} onClick={openCard}>
                        <h2>{title}</h2>
                    </div>
                )
            }
            {
                isOpen && (
                    <div className='OpenedCard' style={style} >
                        <button className="CloseButton" onClick={closeCard}></button>
                        {title}

                    </div>
                )
            }


        </React.Fragment>
    )
}

export default Card;
