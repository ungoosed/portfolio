import githubIcon from '../assets/github-icon.svg';
import openIcon from '../assets/open-icon.svg';
import downloadIcon from '../assets/download-icon.svg';

function IconLinks({ github, website, download }) {


    return (
        <div className="Iconlinks" >
            {
                github && <a href={github} target="_blank" rel="noreferrer noopener">
                    <img className="ClickIcon" id="githubIcon" src={githubIcon} width={20} height={20} alt="github project link" />
                </a>
            }
            {
                website && <a href={website} target="_blank" rel="noreferrer noopener">
                    <img className="ClickIcon" id="openIcon" src={openIcon} width={22} height={22} alt="open project site" />
                </a>
            }
            {
                download && <a href={download} target="_blank" rel="noreferrer noopener">
                    <img className="ClickIcon" id="downloadIcon" src={downloadIcon} width={22} height={22} alt="download link" />
                </a>
            }

        </div>
    )

};
export default IconLinks;