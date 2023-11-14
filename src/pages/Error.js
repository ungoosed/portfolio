import { useRouteError } from "react-router-dom";
import './Error.css'
export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="Error">
      <h1>Oops!</h1>
      <p>you absolute monkey</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}