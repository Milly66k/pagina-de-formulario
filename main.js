

function mostrarSenha(){
    var inputPass = document.getElementById('senha')
    var btnShowPass = document.getElementById('btn-senha')
    if (inputPass.type === 'password'){
        inputPass.setAttribute('type', 'text',)
        btnShowPass.classList.replace('bi-eye-fill', 'bi-eye-slash-fill')
    } else {
        inputPass.setAttribute('type', 'password',)
        btnShowPass.classList.replace('bi-eye-slash-fill', 'bi-eye-fill')
    }

}


async function getData (){
    const result = await fetch("http://localhost:8088")
        .then(result => JSON.stringify(result))
        .then(data => console.log(data))

        return result
}

getData()