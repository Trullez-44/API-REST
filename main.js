import {edit_data, delete_data, userForm} from './modules/crud.js'
//THIS FUNCTION GETS THE DATA FROM MOCKAPIIIIIIIIIII
document.addEventListener("DOMContentLoaded", async function () {
    const userTableBody = document.getElementById("user_table_body");
    try {
        const response = await fetch("http://127.0.0.4:5444/API-REQUEST");
        const data = await response.json();
        userTableBody.innerHTML = "";
        data.forEach(user => {
            const row = document.createElement("tr");
            row.innerHTML = `
                    <td class="datas">${user.id}</td>
                    <td class="values">${user.valor}</td>
                    <td class="caja">${user.caja}</td>
                    <td class="buttons">
                    <button id="${user.id}"class="bttn_delete">DELETE</button>
                    <button id="${user.id}"class="bttn_edit">EDIT</button>
                    </td>
                `;
            userTableBody.appendChild(row);
        });
        const btdelet = document.querySelectorAll(".bttn_delete");
        const btedit = document.querySelectorAll(".bttn_edit");
        btdelet.forEach((item) => {
            item.addEventListener("click", () => {
                // console.log(item);
                delete_data(item.id);
            })
        })
        btedit.forEach((item) => {
            item.addEventListener("click", () => {
                // console.log(item);
                edit_data(item.id);
            })
        })
    } catch (error) {
        console.error("error que papió todo ", error);
    }

});




/* INTENTOS DE CÓDIGO INSANO */
    ////////////////////////////////////////
    /*     const button = document.querySelector(".bttn_delet");
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
            */

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

