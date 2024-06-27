

function MostrarDataHora(){

    let data = new Date();
    console.log(data.toLocaleTimeString());

    document.getElementById("dh").innerText= data.toLocaleString()
    
}

MostrarDataHora()