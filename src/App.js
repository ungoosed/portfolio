// import logo from './logo.svg';
import Nav from './components/NavBar';
import { Outlet } from "react-router-dom";

function Root() {
  return (
    <div className="Root">
      <Nav></Nav>
      <Outlet/>
      <footer className="Footer">
        <p>
          Copyright © 2023 E-man Enterprises
        </p>


      </footer>
    </div>
  );
}

export default Root;
