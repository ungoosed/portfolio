
function Card({ text, backgroundColor }) {
    return (
        <div className="Card" style={
            {
                backgroundColor: {backgroundColor},
                color: 'white'
            }
        }>
            {text}
        </div>
    );
}

export default Card;
