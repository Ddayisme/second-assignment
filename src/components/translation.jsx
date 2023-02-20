const IMG_PATH = "../LostInTranslation_Resources/individial_signs/"

function Translation(props){
    let letters = String(props.props).split("");
    letters = letters.map((l) => l + ".png")
    console.log(letters)

    const signLetters = letters.map((letter) => {
        letter = "a.png"
        return (
            <>
                <img src={letter}></img>
            </>
        )
    })

    return (
        <>
            {signLetters}
        </>
    )
}

export default Translation;