const form_ = document.querySelector("#formSelector")
const url = "https://650ad623dfd73d1fab08fd97.mockapi.io/TEst"
form_.addEventListener("submit", async (event) => {
    event.preventDefault;
    const data = Object.fromEntries(new FormData(event.target));
    console.log(data)
    const { valor } = data;
    data.valor = (typeof valor === "string") ? Number(valor) : null;
    const requestOptions = {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    const send = await (await fetch(url, requestOptions)).json();
});
/* document.addEventListener("DOMContentLoaded", async (e) => {
    const table = document.querySelector("#table_id");
    let res = await (await fetch(url)).json();
    res.forEach((user) => {
        table.insertAdjacentHTML("beforeend", `
        <tr>
            <td>${user.id}</td>
            <td>${user.valor}</td>
            <td>${user.caja}</td>
            <td></td>
        </tr>
            `)
    })
}) */