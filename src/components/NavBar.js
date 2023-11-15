import './NavBar.css'
function NavBar() {
  return (
    <div className="NavBar">
      <button className="Dropdown">
        <a href="../">Home</a>
      </button>
      <button className="Dropdown">
        <a href="../achievements">Achievements</a>
      </button>
      <button className="Dropdown">
        <a href="../projects">Projects</a>
      </button>
      <button className="Dropdown">
        <a href="../contact">Contact</a>
      </button>
      <button className="Dropdown">
        <a href="../404error">404</a>
      </button>

    </div>
  );
}

export default NavBar;