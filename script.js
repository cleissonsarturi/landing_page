const form = document.getElementById("contactForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensagem = document.getElementById("mensagem").value.trim();

  if (nome === "" || email === "" || mensagem === "") {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  if (!validarEmail(email)) {
    alert("Por favor, insira um e-mail válido.");
    return;
  }

  alert(`Obrigado pelo contato, ${nome}! Em breve retornaremos sua mensagem.`);

  form.reset();
});

function validarEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}
