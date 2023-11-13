import './Card.css'
function Card({text, style}) {

    return (

        <div className="Card" style={style}>
            {text}
        </div>
    );
}

export default Card;
