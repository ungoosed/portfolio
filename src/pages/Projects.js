import Card from "../components/Card";
const elfin = require('../assets/reindeer-elfin.jpg')
const frosty = require('../assets/reindeer-frosty.jpg')

function Projects() {
    return (
        <div className="Page">
            <h1>Projects</h1>
            <Card style={{ backgroundImage: `url(${elfin})`}} text={<><h2>reindeer</h2><br></br><h3>A boofer</h3></>}></Card>
            <Card style={{ backgroundImage: `url(${frosty})`}} text={<><h2>reindeer</h2><br></br><h3>A boofer</h3></>}></Card>
            <Card text={<><h2>reindeer</h2><br></br><h3>A boofer</h3></>}></Card>
            <Card text={<><h2>reindeer</h2><br></br><h3>A boofer</h3></>}></Card>
            <Card text={<><h2>reindeer</h2><br></br><h3>A boofer</h3></>}></Card>
            <Card text={<><h2>reindeer</h2><br></br><h3>A boofer</h3></>}></Card>
            <Card text={<><h2>reindeer</h2><br></br><h3>A boofer</h3></>}></Card>
            <Card text={<><h2>reindeer</h2><br></br><h3>A boofer</h3></>}></Card>
            <Card text={<><h2>reindeer</h2><br></br><h3>A boofer</h3></>}></Card>
            <Card text={<><h2>reindeer</h2><br></br><h3>A boofer</h3></>}></Card>


            <><ul>
                <li>
                    <a href="http://localhost:5000">port 5000</a>
                </li>
                <li>
                    <a href="https://localhost:8080">port 8080</a>

                </li>
                <li>
                    <a href="https://localhost:3000">port 3000</a>

                </li>
                <li>
                    <a href="https://q4c.netlify.app">The Quest for Conception</a>

                </li>
            </ul></>
        </div >
    );
}

export default Projects;