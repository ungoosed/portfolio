

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

                <p>	¯\_(ツ)_/¯</p>



            </div ></displayContext.Provider>

    );
}
export const displayContext = createContext()

export default Achievements;
