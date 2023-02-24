import { Navigate } from "react-router-dom";

/**
 * Wraps around pages which should not be accessable when not logged in.
 * If there is no one logged in it will send them back to the login page.
 */
function authGuard(Component) {
  return function (props) {
    let condition = localStorage.getItem("username") != null;

    if (condition) {
      return <Component {...props} />;
    } else {
      return <Navigate to="/"></Navigate>;
    }
  };
}

export default authGuard;
