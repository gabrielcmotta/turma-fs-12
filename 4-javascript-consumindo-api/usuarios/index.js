let editID = null;

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
                        <td>
                        <button 
                            type="button btn-sm"
                            onclick="editarUsuario('${usuario.id}', '${usuario.name}', '${usuario.email}')"
                            class="btn btn-info"
                        >
                            <i class="bi bi-pencil-square"></i> Editar
                        </button>
                        <button type="button btn-sm" class="btn btn-danger">
                            <i class="bi bi-trash"></i>
                            Excluir
                        </button>
                        </td>
                    <tr/>
                `
            })
        })
}

function limparFormulario() {
    document.getElementById('nome').value = null
    document.getElementById('email').value = null
}

function editarUsuario(id, name, email) {
    document.getElementById('nome').value = name;
    document.getElementById('email').value = email;

    editID = id;
    document.getElementById('btn-cadastrar-usuario').innerText = "Atualizar"
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

    if (editID != null) {
        fetch(`http://localhost:3000/usuarios/${editID}`, {
            method: 'PUT',
            body: JSON.stringify(body)
        })
            .then(resposta => resposta.json())
            .then(usuario => {
                montaTabela()
                limparFormulario()
                document.getElementById('btn-cadastrar-usuario').innerText = "Cadastrar"
                editID = null
            })
        return;
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