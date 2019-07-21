const fetch = require('node-fetch')

const url = "http://localhost:3000"

const details = {
    name: "Daniel Glover",
    email: "123456789@gmail.com",
    password: "swordpass"
}

const signup = async (info) => {
    try {
        const response = await fetch(`${url}/users`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(info)
        })
        const json = await response.json()
        console.log(json)
        return json
    } catch (e) {
        throw new Error(e)
    }
}

signup(details)
