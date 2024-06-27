

function MostrarDataHora(){

    let data = new Date();
    console.log(data.toLocaleDateString());

    document.getElementById("dh").innerText= data.toLocaleString()
    
}

MostrarDataHora()