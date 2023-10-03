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
        const response = await fetch("https://650ad623dfd73d1fab08fd97.mockapi.io/TEst", requestOptions);
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
    let res = await (await fetch(`https://650ad623dfd73d1fab08fd97.mockapi.io/TEst/${id}`, requestOptions)).json();
    alert(`Se ha eliminado correctamente`)
window.location.reload();}

//EDIT FUNCTIOOOOOOOOOOOOOOON

export const edit_data = async (id) => {
    let obj={};
    try {
        let caja = prompt(
`Seleccione una opción
1. Ingresó
2. Egresó`) 
            if(caja ==='1'){
                obj['caja'] = "ingreso";
                // console.log(obj);
            }
            else if(caja ==='2'){
                obj['caja'] = "egreso";
            }
            else{
                alert("Opción inválida");
                return;
            }
            let valor = prompt(
                `¿Qué monto es?`)
            obj['valor'] = Number(valor);
          /*  }
          //
        INTENTO DE Operar ternario
        console.log(caja1);
        console.log(typeof(caja1));
        caja1 = (typeof caja1=== "string") ? Number(valor) : null;
        console.log(typeof(caja1));
        (caja1 == 1) ? obj['caja'] = "ingreso" : (caja1 == 2) ? obj.caja ="egreso" : "Opción inválida";
        console.log(obj.caja);
        console.log(obj);
         */
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
    let res = await fetch(`https://650ad623dfd73d1fab08fd97.mockapi.io/TEst/${id}`, requestOptions);  
    // console.log(res);
    alert(`Se ha actualizado correctamente`)
    window.location.reload();
}



