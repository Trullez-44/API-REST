import {edit_data, delete_data, userForm} from './modules/crud.js'
//THIS FUNCTION GETS THE DATA FROM MOCKAPIIIIIIIIIII
document.addEventListener("DOMContentLoaded", async function () {
    const userTableBody = document.getElementById("user_table_body");
    try {
        const response = await fetch("http://192.168.110.206:5444/API-REQUEST");
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
