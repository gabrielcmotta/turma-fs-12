document.addEventListener("DOMContentLoaded", async () => {

    console.log("AQUI TEM UM BOCADO DE COISA")

    const response = await fetch("http://localhost:3000/usuarios")

    console.log("PASSO 1")
    const usuarios = await response.json()

    console.log("PASSO 2")
    console.log(usuarios.length)

    console.log("PASSO 3")
})


















// document.addEventListener("DOMContentLoaded", () => {
//     const promise1 = fetch("http://localhost:3000/usuarios")

//     const promise2 = promise1.then(response => {
//         console.log("PASSO 1")

//         return response.json()
//     })

//     promise2.then(response => {
//         console.log("PASSO 2")
//     })

//     console.log("PASSO 3")
// })