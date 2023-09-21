/////////////////////////////////////////////////
//INTENTO 2 CON FUNCIÓN ASINCRONA PARA CARGAR LOS DATOS EN LA TABLA
document.addEventListener("DOMContentLoaded", function () {
    const loadButton = document.getElementById("load_data_button");
    const userTableBody = document.getElementById("user_table_body");
    loadButton.addEventListener("click", async function () {
        try {
            const response = await fetch("https://650ad623dfd73d1fab08fd97.mockapi.io/TEst");
            const data = await response.json();
            userTableBody.innerHTML = "";
            data.forEach(user => {
                const row = document.createElement("tr");
                row.innerHTML = `
                    <td>${user.id}</td>
                    <td>${user.valor}</td>
                    <td>${user.caja}</td>
                `;
                userTableBody.appendChild(row);
            });
        } catch (error) {
            console.error("error que papió todo ", error);
        }
    });
});

//////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", function () {
    const userForm = document.getElementById("user_form");
    userForm.addEventListener("submit", async function (event) {
        event.preventDefault();
        const data = Object.fromEntries(new FormData(event.target));
        const { valor } = data;
        data.valor = (typeof valor === "string") ? Number(valor) : null;
        console.log(data);
        // const ID = document.getElementById("ID").value;
       /*  const valor = document.getElementById("valor").value;
        const tipo = document.getElementById("tipo").value;
        const newUser = {
            valor,
            tipo,
            // ID
        } */;
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };
        try {
            const response = await fetch("https://650ad623dfd73d1fab08fd97.mockapi.io/TEst", requestOptions);
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error("error que papió todo ", error);
        }
    });
});