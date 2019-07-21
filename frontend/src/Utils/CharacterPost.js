const characterPost = async (character, url) => {
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json",
                "Authorization": localStorage.getItem("token") },
            body: JSON.stringify(character)
        })
        const json = await response.json()
        return json 
    } catch (e) {
        throw new Error(e)
    }
}

module.exports = characterPost