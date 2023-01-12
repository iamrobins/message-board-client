export async function postMessage(message) {
    const response = await fetch("http://localhost:8000/api/v1/message/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: message })
    })
    const data = await response.json();
    return data;
}

export async function getMessages() {
    const response = await fetch("http://localhost:8000/api/v1/message/", {
        method: "GET",
        headers: { "Content-Type": "application/json" }
    })
    const data = await response.json();
    return data;
}