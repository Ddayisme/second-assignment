import authGuard from "../authGuard";

const apiURL = "https://ripe-eminent-moonflower.glitch.me/translations"
const apiKEY= "noroff"
const username= localStorage.getItem("username");

const aGet=fetch(`${apiURL}/?username=${username}`)
    .then(response => response.json())
    .then(results => {
       return results[0].translations;
    })
    .catch(error => {
    })

  

function post(){
        
        fetch(`${apiURL}`, {
        method: 'POST',
        headers: {
          'X-API-Key': apiKEY,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
            username: username, 
            translations: [] 
        })
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Could not create new user')
      }
      return response.json()
    })
    .then(newUser => {
      // newUser is the new user with an id
    })
    .catch(error => {
    })
}


console.log()

function profilePage(){
    return <div>
        <p>Profile page</p>
        <p></p>
    </div>
}

export default authGuard(profilePage);