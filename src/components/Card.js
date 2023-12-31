import React, { useContext, useState } from 'react';
import './Card.css'
import './IconLinks'
function Card({ title, style, pageId, cardId }) {

    const parentComponent = require('../pages/' + pageId);
    const OpenedCard = require('../pages/' + pageId + '/cards/' + cardId + 'Card').default;

    const { isDisplayed, setDisplayed } = useContext(parentComponent.displayContext);
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
                    <div className='OpenedCard' >

                        <OpenedCard></OpenedCard>
                        <button className='CloseButton' onClick={closeCard}></button>
                    </div>
                )
            }


        </React.Fragment>
    )
}

export default Card;
