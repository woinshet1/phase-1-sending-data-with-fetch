// Add your code here
const submitData = (username, email) => {

    let data = {
        "name": username,
        "email": email
    }

    return fetch('http://localhost:3000/users', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then (res => res.json())
    .then (data => {
        document.body.innerHTML = `${data.id}`
    })
    .catch ((error) => {
        //console.log(error)
        console.log(error.message)
        document.body.innerHTML = error.message
    })
    
}
