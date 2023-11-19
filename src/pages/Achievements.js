
import './Page.css';
import Card from "../components/Card";
import { useState, createContext } from 'react';

function Achievements() {
    const [isDisplayed, setDisplayed] = useState(true)

    return (
        <displayContext.Provider value={{ isDisplayed, setDisplayed }}>
            <div className="Page">
                <h1>Achievements</h1>
                <Card title='Origami!!!!'></Card>
                <Card title='Juan de Fuca'></Card>
                <Card title='Bike like Hike'></Card>
                <Card title='DUKE OF ED'></Card>
                <Card title='Crystal peeveepeee'></Card>
                <Card title='Mountain in Minecraft'></Card>
                <Card title='This website!'></Card>

            </div ></displayContext.Provider>

    );
}
export const displayContext = createContext()

export default Achievements;