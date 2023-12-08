import { Link } from "react-router-dom";
import githubIcon from '../../../assets/github-mark.svg'

function Q4C() {
    return (
        <div className="OpenedCardContent">
            <h2>The Quest for Conception</h2>
            <a href="https://github.com/ungoosed/q4c">
                <img id="githubIcon" src={githubIcon} width={20} height={20} />
            </a>
            <p>The Quest for conception is a epic game I made for a grade 9 science project.</p>
            <u><Link to='./hi'></Link></u>
        </div >

    );
}
export default Q4C;