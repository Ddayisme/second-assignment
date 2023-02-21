

function Translation(props){
    let letters = String(props.props).split("");
    letters = letters.map((l) => l + ".png")
    console.log(letters)

    const signLetters = letters.map((letter) => {
        letter = "/Images/LostInTranslation_Resources/individial_signs/"+letter
        console.log(letter)
        return (
            <>
                
                <img src={process.env.PUBLIC_URL + letter}></img>

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