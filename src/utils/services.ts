const HOST_NAME = process.env.HOUSEHOLD_APP_HOST_NAME || 'http://localhost:3000'

export const getRequest = (endpoint: string) => {
    fetch(HOST_NAME + endpoint)
     .then(
        res => { return res.json() }
    ).catch(
        e => { throw new Error(e) }
    )
}

export const postRequst = (endpoint: string, body: object) => {
    fetch(HOST_NAME + endpoint, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
    .then(
        res => { return res.json }
    ).catch(
        e => { throw new Error(e) }
    )
}