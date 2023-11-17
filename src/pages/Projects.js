import './Page.css';
import Card from "../components/Card";
import { useState, createContext, useContext } from 'react';
const elfin = require('../assets/reindeer-elfin.jpg');
const frosty = require('../assets/reindeer-frosty.jpg');
const pumpkin = require('../assets/reindeer-pumpkin.jpg');


function Projects() {
    const [isDisplayed, setDisplayed] = useState(true)

    return (
        <displayContext.Provider value={{isDisplayed, setDisplayed}}>
            <div className="Page">
                <h1>Projects</h1>
                <Card style={{ backgroundImage: `url(${elfin})` }} title='Elfin Lakes Reindeer Adventure'></Card>
                <Card style={{ backgroundImage: `url(${frosty})` }} title={'Frosty Mountain Journey'}></Card>
                <Card style={{ backgroundImage: `url(${pumpkin})` }} title={'Reindeer Carves A Nice Pumpkin'}></Card>
                <Card title={<><h2>reindeer</h2><br></br><h3>ee</h3></>}></Card>
                <Card title={<><h2>reindeer</h2><br></br><h3>ee</h3></>}></Card>
                <Card title={<><h2>reindeer</h2><br></br><h3>ee</h3></>}></Card>
                <Card title={<><h2>reindeer</h2><br></br><h3>ee</h3></>}></Card>
                <Card title={<><h2>reindeer</h2><br></br><h3>ee</h3></>}></Card>
                <Card title={<><h2>reindeer</h2><br></br><h3>ee</h3></>}></Card>
                <Card title={<><h2>reindeer</h2><br></br><h3>ee</h3></>}></Card>
                <Card title={<><h2>reindeer</h2><br></br><h3>A </h3></>}></Card>
            </div ></displayContext.Provider>

    );
}
export const displayContext = createContext()

export default Projects;