import '../Page.css';
import Card from "../../components/Card";
import { useState, createContext } from 'react';

const Q4C = require('../../assets/q4c.png')
const CubeDudeRun = require('../../assets/CubeDudeRun.png')
const elfin = require('../../assets/reindeer-elfin.jpg');
const frosty = require('../../assets/reindeer-frosty.jpg');
const pumpkin = require('../../assets/reindeer-pumpkin.jpg');
const Doxicon = require('../../assets/doxicon.png');

function Projects() {
    const [isDisplayed, setDisplayed] = useState(true)
    const page = 'Projects'
    return (
        <displayContext.Provider value={{isDisplayed, setDisplayed}}>
            <div className="Page">
                <h1>Projects</h1>
                <Card cardId={'Q4C'} pageId={page} style={{ backgroundImage: `url(${Q4C})` }}title='Quest for Conception'></Card>

                <Card cardId={'Doxicon'} pageId={page} style={{ backgroundImage: `url(${Doxicon})` }} title='Doxicon'></Card>
                <Card cardId={'CubeDudeRun'} pageId={page} style={{ backgroundImage: `url(${CubeDudeRun})` }}title='Cube Dude Run'></Card>

                {/* <Card cardId={'Template'} pageId={page} title='Empty Element'></Card> */}

            </div ></displayContext.Provider>

    );
}
export const displayContext = createContext()

export default Projects;