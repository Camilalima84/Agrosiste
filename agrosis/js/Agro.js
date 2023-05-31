document.getElementById("login-form").addEventListener("submit", function(event) {
  event.preventDefault();
  
  var email = document.getElementById("email").value;
  var senha = document.getElementById("senha").value;
  
  if (email.trim() === '') {
    alert("Por favor, digite o nome de usuário");
    return; // Encerra a função aqui para evitar o envio do formulário
  }
  

  
  window.location.href = "painel.html";
});

document.getElementById("btn-cadastrar").addEventListener("click", function() {
  // o usuário para a página de cadastro
  window.location.href = "cadastro.html";
});