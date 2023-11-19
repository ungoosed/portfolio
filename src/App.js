// import logo from './logo.svg';
import Nav from './components/NavBar';
function Root({page}) {
  return (
    <div className="Root">
      <Nav></Nav>
      {page}
      <footer className="Footer">
        <p>
          Copyright © 2023 E-man Enterprises
        </p>


      </footer>
    </div>
  );
}

export default Root;
