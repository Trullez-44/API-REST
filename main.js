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
                    <td>
                    <button data-id="${user.id}"class="bttn_delet">eliminar</button>
                    <button data-id="${user.id}"class="bttn_edit">editar</button>
                    </td>
                `;
                userTableBody.appendChild(row);
            });
        } catch (error) {
            console.error("error que papió todo ", error);
        }
    });
});

//////////////////////////////////////////////////
    const userForm = document.getElementById("user_form");
    userForm.addEventListener("submit", async function (event) {
        event.preventDefault();
        const data = Object.fromEntries(new FormData(event.target));
        const { valor } = data;
        data.valor = (typeof valor === "string") ? Number(valor) : null;
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
    ////////////////////////////////////////
    const button = document.querySelector(".bttn_delet");
    button.addEventListener("click", async function(){
        const userIdToDelete = 1;
        requestOptions = {
            method: 'DELETE'
        };

        fetch(`https://650ad623dfd73d1fab08fd97.mockapi.io/TEst/${userIdToDelete}`, requestOptions)
            .then(response => {
                if (response.status === 200) {
                    console.log("Usuario eliminado correctamente.");
                } else {
                    console.error("Error al eliminar el usuario.");
                }
            })
            .catch(error => {
                console.error("Error al eliminar el usuario:", error);
            });
    })
        
        
    ///////////////////////////////
    // const userIdToUpdate = 1; // Cambia el ID según tu necesidad
    // const updatedUserData = {
    //     name: "Nuevo nombre",
    //     username: "Nuevo nombre de usuario",
    //     email: "nuevo@correo.com"
    // };

    // const requestOptions = {
    //     method: 'PUT',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(updatedUserData)
    // };

    // fetch(`https://jsonplaceholder.typicode.com/users/${userIdToUpdate}`, requestOptions)
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log("Usuario actualizado:", data);
    //     })
    //     .catch(error => {
    //         console.error("Error al actualizar el usuario:", error);
    //     });

});