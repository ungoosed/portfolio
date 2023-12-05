// import logo from './logo.svg';
import Footer from './components/Footer';
import Nav from './components/NavBar';
import { Outlet } from "react-router-dom";
function Root() {
  return (
    <div className="Root">
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Root;
