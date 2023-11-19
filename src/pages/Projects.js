import './Page.css';
import Card from "../components/Card";
import { useState, createContext } from 'react';

const elfin = require('../assets/reindeer-elfin.jpg');
const frosty = require('../assets/reindeer-frosty.jpg');
const pumpkin = require('../assets/reindeer-pumpkin.jpg');
const doxicon = require('../assets/doxicon.png');



function Projects() {
    const [isDisplayed, setDisplayed] = useState(true)
    const page = 'Projects'
    return (
        <displayContext.Provider value={{isDisplayed, setDisplayed}}>
            <div className="Page">
                <h1>Projects</h1>
                <Card page={page} style={{ backgroundImage: `url(${elfin})` }} title='Elfin Lakes Reindeer Adventure'></Card>
                <Card page={page} style={{ backgroundImage: `url(${doxicon})` }} title='Doxicon'></Card>
                <Card page={page} style={{ backgroundImage: `url(${frosty})` }} title={'Frosty Mountain Journey'}></Card>
                <Card page={page} style={{ backgroundImage: `url(${pumpkin})` }} title={'Reindeer Carves A Nice Pumpkin'}></Card>

            </div ></displayContext.Provider>

    );
}
export const displayContext = createContext()

export default Projects;