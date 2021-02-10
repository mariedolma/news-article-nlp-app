const getApiKey = async () => {
    const res = await fetch('http://localhost:8088/key')
    try {
        const key = await res.text()
        console.log('Key from keyGetter: ' + key);
        return key
    } catch (error) {
        console.log("ERROR in getApiKey: ", error)
    }
}

const getNlp = async (baseURL, apiKey, uri) => {
    const res = await fetch(baseURL + apiKey + uri)
    try {
        const data = await res.json()
        console.log(data)
        return data  
    } catch (error) {
        console.log("Could not fetch nlp: ", error)
    }
}

export { 
    getNlp,
    getApiKey 
}