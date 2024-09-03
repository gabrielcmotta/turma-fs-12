const usuarios = [ 

    { nome: "João", idade: 30, profissao: "Engenheiro" }, 

    { nome: "Maria", idade: 25, profissao: "Designer" }, 

    { nome: "Pedro", idade: 35, profissao: "Programador" } 

]; 



const corpoTabela = document.getElementById("corpo-tabela"); 

for (let i = 0; i < usuarios.length; i++) { 

    const usuario = usuarios[i]; 

    const tr = document.createElement("tr"); 

    tr.innerHTML = ` 

        <td>${usuario.nome}</td> 

        <td>${usuario.idade}</td> 

        <td>${usuario.profissao}</td> 

    `; 

    corpoTabela.appendChild(tr); 

} 

