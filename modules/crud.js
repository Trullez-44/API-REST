// CREATE FUNCTIOOOOOOOOOOOOOOOON

export const userForm = document.getElementById("user_form");
userForm.addEventListener("submit", async function (event) {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.target));
    // console.log(data);
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
        const response = await fetch("http://192.168.110.206:5444/API-REQUEST", requestOptions);
    } catch (error) {
        console.error("error que papió todo ", error);
    }
    window.location.reload();});

//DELETE FUNCTIOOOOOOOOOOOOON

export const delete_data = async (id) => {
    const requestOptions = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    };
    let res = await (await fetch(`http://192.168.110.2065444/API-REQUEST/${id}`, requestOptions)).json();
    alert(`It was deleted successfully`)
window.location.reload();}

//EDIT FUNCTIOOOOOOOOOOOOOOON

export const edit_data = async (id) => {
    let obj={};
    try {
        let caja = prompt(
`Select an option
1. INCOMING
2. OUTCOMING`) 
            if(caja ==='1'){
                obj['caja'] = "INCOMING";
                // console.log(obj);
            }
            else if(caja ==='2'){
                obj['caja'] = "OUTCOMING";
            }
            else{
                alert("INVALID OPTION ");
                return;
            }
            let valor = prompt(
                `HOW MUCH IT'S?`)
            obj['valor'] = Number(valor);

    } catch (error) {
        alert(`Joa manito, píllate esta ${error}`)
    }
    const requestOptions = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
    };
    let res = await fetch(`http://192.168.110.206/API-REQUEST/${id}`, requestOptions);  
    // console.log(res);
    alert(`It was updated successfully`)
    window.location.reload();
}



