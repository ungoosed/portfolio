import './Card.css'
function Card({title, style}) {

    return (

        <div className="Card" style={style}>
            
            <h3>{title}</h3>
        </div>
    );
}

export default Card;
