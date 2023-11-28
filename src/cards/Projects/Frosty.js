const frosty = require('../../assets/reindeer-frosty.jpg');

function Frosty() {
    return (
        <div className="OpenedCardContent">
            <h2>Reindeer Boofer is a good hiker!</h2>
            <p>
                Once upon a time, reindeer scaled the great cliffs of frosty mountain. As he was such a good hiker, everyone now gives him free gooseberries when he goes the the local gooseberry stand 
            </p>
            <img width='90%' src={frosty} alt="reindeer on top of frosty mountain"></img>
        </div >

    );
}
export default Frosty;