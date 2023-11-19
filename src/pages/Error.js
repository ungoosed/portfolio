import { useRouteError } from "react-router-dom";
import './Error.css'
import NavBar from "../components/NavBar";
import '../index.css'
export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);
  return (<>
    <NavBar></NavBar>
    <div id="Error">
      <h1>Oops! you did something bad lolol 404 error</h1>
      <p>
        <code><i>{error.statusText || error.message}</i></code>
      </p>
    </div></>

  );
}