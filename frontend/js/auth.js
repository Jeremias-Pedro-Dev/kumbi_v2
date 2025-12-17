async function login() {
    const tipo = document.getElementById("tipo").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    const res = await fetch(`http://127.0.0.1:8000/${tipo}/login`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({email, senha})
    });

    const data = await res.json();
    localStorage.setItem("token", data.token || data.access_token);

    if (tipo === "admin") location.href = "../frontend/dashboard.html";
    else location.href = "cadastro.html";
}
async function cadastrar() {
  const tipo = tipo.value;
  await fetch(`http://127.0.0.1:8000/${tipo}/register`, {
    method: "POST",
    headers: {"Content-Type": "application/json"},

    
    body: JSON.stringify({nome, email, senha})
  });
  alert("Cadastrado com sucesso");
}

// function abrircadastro(){
//   document.getElementById("loginform")
//   document.getElementById("singnupModal")
// esta função seria para ir ao cadastro}