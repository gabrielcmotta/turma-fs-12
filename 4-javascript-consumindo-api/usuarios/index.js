function montaTabela() {
    fetch(`http://localhost:3000/usuarios`)
        .then(resposta => resposta.json())
        .then(dadosUsuarios => {
            document.getElementById('tabela-de-usuarios').innerHTML = ''

            dadosUsuarios.map(function(usuario) {
                document.getElementById('tabela-de-usuarios').innerHTML += `
                    <tr>
                        <td>${usuario.id}</td>
                        <td>${usuario.name}</td>
                        <td>${usuario.email}</td>
                        <td>jaja eu boto</td>
                    <tr/>
                `
            })
        })
}

function limparFormulario() {
    document.getElementById('nome').value = null
    document.getElementById('email').value = null
}

document.addEventListener('DOMContentLoaded', function() {
    montaTabela()
})

document.getElementById("btn-cadastrar-usuario").addEventListener("click", function() {
    let inputNome = document.getElementById('nome').value
    let inputEmail = document.getElementById('email').value

    if (!inputNome) {
        alert('Preencha o nome')
        return
    }

    if (!inputEmail) {
        alert('Preencha o email')
        return
    }

    let body = {
        name: inputNome,
        email: inputEmail
    }

    fetch(`http://localhost:3000/usuarios`, {
        method: 'POST',
        body: JSON.stringify(body)
    })
        .then(resposta => resposta.json())
        .then(usuario => {
            montaTabela()
            limparFormulario()
        })
})