

import '../Page.css';
import Card from "../../components/Card";
import { useState, createContext } from 'react';

function Achievements() {
    const [isDisplayed, setDisplayed] = useState(true)
    const page = 'Achievements'
    return (
        <displayContext.Provider value={{ isDisplayed, setDisplayed }}>
            <div className="Page">
                <h1>Achievements</h1>
                <Card cardId={'Doxicon'} pageId={page} title='epic juan def uca'></Card>
                <Card cardId={'Doxicon'} pageId={page} title={'reindeer shoots the booferlo'}></Card>
                <Card cardId={'Doxicon'} pageId={page} title={'piplup drowned'}></Card>
                <Card cardId={'Doxicon'} pageId={page} title='duke of ed'></Card>
                <Card cardId={'Doxicon'} pageId={page} title='cyrstal peeveepee'></Card>
                <Card cardId={'Doxicon'} pageId={page} title='didnt die yet'></Card>
                <Card cardId={'Doxicon'} pageId={page} title='reindeer has a nice bowtie'></Card>
                <Card cardId={'Doxicon'} pageId={page} title='reindeer has a nice bowtie'></Card>
                <Card cardId={'Doxicon'} pageId={page} title='reindeer has a nice bowtie'></Card>
                <Card cardId={'Doxicon'} pageId={page} title='reindeer has a nice bowtie'></Card>



            </div ></displayContext.Provider>

    );
}
export const displayContext = createContext()

export default Achievements;
