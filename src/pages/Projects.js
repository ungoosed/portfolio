import './Page.css';
import Card from "../components/Card";
import { useState, createContext, useContext } from 'react';
const elfin = require('../assets/reindeer-elfin.jpg');
const frosty = require('../assets/reindeer-frosty.jpg');
const displayContext = createContext()

function Projects() {
    const [isDisplayed, setDisplayed] = useState()

    return (
        <displayContext.Provider value={isDisplayed}>
            <div className="Page">
                <h1>Projects</h1>
                <Card style={{ backgroundImage: `url(${elfin})` }} title={<><h2>reindeer</h2><br></br><h3>A boofer</h3></>}></Card>
                <Card style={{ backgroundImage: `url(${frosty})` }} title={<><h2>reindeer</h2><br></br><h3>A boofer</h3></>}></Card>
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

export default Projects;