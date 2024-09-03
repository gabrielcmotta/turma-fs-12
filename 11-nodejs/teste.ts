const usuarios = [
    {
        id: "1",
        name: "Eduardo"
    },
    {
        id: "2",
        name: "José"
    },
    {
        id: "3",
        name: "Bruno"
    }
]

const excluir = (id: string) => {
    const indiceUsuario = usuarios.findIndex(user => user.id == id)

    usuarios.splice(indiceUsuario, 1)

    console.log(usuarios)
}

// excluir("2")