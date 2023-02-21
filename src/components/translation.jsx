function Translation(props){
    let letters = String(props.props).split("");
    letters = letters.map((l) => l + ".png")
    console.log(props)
    console.log(letters)

    const signLetters = letters.map((letter, index) => {
        letter = "/Images/LostInTranslation_Resources/individial_signs/"+letter
        console.log(letter)
        return (
            <div key={index}>
                <img src={process.env.PUBLIC_URL + letter} alt=""></img>
            </div>
        )
    })

    return (
        <div className="TranslationView">
            {signLetters}
        </div>
    )
}

export default Translation;