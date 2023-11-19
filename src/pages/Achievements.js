

import './Page.css';
import Card from "../components/Card";
import { useState, createContext } from 'react';

function Achievements() {
    const [isDisplayed, setDisplayed] = useState(true)
    const page = 'Achievements'
    return (
        <displayContext.Provider value={{ isDisplayed, setDisplayed }}>
            <div className="Page">
                <h1>Achievements</h1>
                <Card page={page} title='epic juan def uca'></Card>
                <Card page={page} title={'reindeer shoots the booferlo'}></Card>
                <Card page={page} title={'piplup drowned'}></Card>
                <Card page={page} title='duke of ed'></Card>
                <Card page={page} title='cyrstal peeveepee'></Card>
                <Card page={page} title='didnt die yet'></Card>
                <Card page={page} title='reindeer has a nice bowtie'></Card>

            </div ></displayContext.Provider>

    );
}
export const displayContext = createContext()

export default Achievements;
