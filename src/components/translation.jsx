/**
 * This component takes the letters from the English sentence and makes it into the sign image.
 */
function Translation(props) {
  let letters = String(props.props).split("");
  letters = letters.map((l) => l + ".png");

  const signLetters = letters.map((letter, index) => {
    letter = "/Images/LostInTranslation_Resources/individial_signs/" + letter;
    return (
      <div key={index}>
        <img
          className="signImages"
          src={process.env.PUBLIC_URL + letter}
          alt=""
        ></img>
      </div>
    );
  });

  return <div className="TranslationView">{signLetters}</div>;
}

export default Translation;
