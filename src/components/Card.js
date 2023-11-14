import './Card.css'
function Card({text, style}) {

    return (

        <div className="Card" style={style}>
            
            <h3>{text}</h3>
        </div>
    );
}

export default Card;
