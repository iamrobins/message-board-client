const HOST = process.env.REACT_APP_HOST;

export async function postMessage(message) {
    const response = await fetch(`${HOST}api/v1/message/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: message }),
        credentials: "include"
    })
    if (response.status !== 201)
        throw Error("Invalid Input");
}

export async function getMessages() {
    const response = await fetch(`${HOST}api/v1/message/`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include"
    })
    const data = await response.json();
    return data;
}

export async function deleteMessage(secret, id=null) {
    const response = await fetch(`${HOST}api/v1/message/?id=${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ secret }),
        credentials: "include"
    })
    if (response.status !== 204)
        throw Error("Unable to process delete request");
}