import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addTranslation } from "../state/translationsSlice";

const apiUrl = "https://ripe-eminent-moonflower.glitch.me/translations";
const apiKey = "noroff";

/**
 * This component generates the login form (input field).
 * Then does API calls to find the user, or make a user if it doesn't exists.
 */
function LoginForm() {
  const [name, setName] = useState({ value: "" });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("username", name);
    fetch(`${apiUrl}?username=${name}`)
      .then((response) => response.json())
      .then((result) => {
        if (result.length === 0) {
          fetch(`${apiUrl}`, {
            method: "POST",
            headers: {
              "X-API-Key": apiKey,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              username: name,
              translations: [],
            }),
          })
            .then((response) => response.json())
            .then((result) => {
              localStorage.setItem("userID", result.id);
            });
        } else {
          localStorage.setItem("userID", result[0].id);
          result[0].translations.forEach((element) => {
            dispatch(addTranslation(element));
          });
        }
      });

    navigate("/translations");
  };

  function handleLoginChange(event) {
    setName(event.target.value);
  }

  return (
    <>
      <form onSubmit={handleLoginSubmit}>
        <fieldset>
          <input
            type="text"
            placeholder="Enter Name"
            onChange={handleLoginChange}
          ></input>
          <button type="submit">Login </button>
        </fieldset>
      </form>
    </>
  );
}

export default LoginForm;
