import './NavBar.css'
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div className="NavBar">
      <button className="Dropdown">
        <Link to="../">Home</Link>
      </button>
      <button className="Dropdown">
        <Link to="../achievements">Achievements</Link>
      </button>
      <button className="Dropdown">
        <Link to="../projects">Projects</Link>
      </button>
      <button className="Dropdown">
        <Link to="../contact">Contact</Link>
      </button>
      <button className="Dropdown">
        <Link to="../404error">404</Link>
      </button>

    </div>
  );
}

export default NavBar;