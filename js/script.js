

function MostrarDataHora(){

    let data = new Date();
    console.log(data.toLocaleString());

    document.getElementById("dh").innerText= data.toLocaleString()
    
}

MostrarDataHora()