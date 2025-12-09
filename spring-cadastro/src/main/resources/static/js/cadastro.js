const formulario = document.querySelector("form");

const Inome = document.querySelector(".nome");
const IEmail = document.querySelector(".email");
const ISenha = document.querySelector(".senha");
const ITelefone = document.querySelector(".tel");

formulario.addEventListener('submit', function (event) {
    event.preventDefault();

    const dados = {
        nome: Inome.value,
        email: IEmail.value,
        senha: ISenha.value,
        telefone: ITelefone.value
    };
    
    console.log(dados);
    
    formulario.reset();
    
});

function cadastrar() {

    const dados = {
        nome: document.querySelector(".nome").value,
        email: document.querySelector(".email").value,
        senha: document.querySelector(".senha").value,
        telefone: document.querySelector(".tel").value
    };
    
    
    fetch("http://localhost:8080/cadastrar", {
        method: "POST", 
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados) 
    })
    .then(response => {
     
        if (!response.ok) {
            throw new Error(`Erro HTTP: ${response.status}`); 
        }
        return response.json();
    })
    .then(data => {
     
        console.log("Resposta do servidor:", data);
        alert("Cadastro realizado com sucesso!");
        
       limpar();
    })
    .catch(error => {
       
        console.error("Erro ao cadastrar:", error);
        alert("Erro ao cadastrar. Tente novamente.");

        limpar();
    });
}

function limpar ()
{
    Inome.value = "";
    IEmail.value = "";
    ISenha.value = "";
    ITelefone.value = "";
}