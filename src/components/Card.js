import './Card.css'
import { useState } from 'react';
function Card({title, style}) {
    const[open, setOpen] = useState(false);
    function handleClick() {
        setOpen(true)
    }
    return (
        <div className="Card" style={style} onClick={handleClick}>
        <h3>{title}</h3>
    </div>
    )
}

export default Card;
