const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});
 
  
const form = document.querySelector("form"); // Selecione o formulário

form.addEventListener("submit", function(event) {
  event.preventDefault(); // Impede o envio padrão do formulário

  // Obter os valores dos campos do formulário
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const message = document.getElementById('message').value.trim();
  const services = document.getElementById('services').value; // Não precisa do .trim() aqui

  let errorMessage = ''; // Variável para armazenar a mensagem de erro

  // Verificar se os campos obrigatórios estão preenchidos
  const errors = [];
  if (!name) errors.push('O campo "Nome de Usuário" está vazio.');
  if (!email) errors.push('O campo "E-mail" está vazio.');
  if (!phone) errors.push('O campo "Telefone" está vazio.');
  if (!message) errors.push('O campo "Mensagem" está vazio.');
  if (!services) errors.push('O campo "Serviços" está vazio.');

  // Verificar o comprimento do telefone (9 a 12 caracteres)
  if (phone && (phone.length < 9 || phone.length > 12)) {
    errors.push('O número de telefone deve ter entre 9 e 12 caracteres.');
  }

  // Verificar o comprimento da mensagem (10 a 5000 caracteres)
  if (message && (message.length < 10 || message.length > 5000)) {
    errors.push('A mensagem deve ter entre 10 e 5000 caracteres.');
  }

  // Se houver algum erro, exibir e impedir o envio
  if (errors.length > 0) {
    alert('Por favor, preencha os seguintes campos corretamente: \n' + errors.join('\n'));
    return; // Impede o envio do formulário
  }

  // Exibir uma mensagem de carregamento
  const loadingMessage = document.createElement('p');
  loadingMessage.textContent = 'Enviando...';
  form.appendChild(loadingMessage);

  // Enviar os dados do formulário para o EmailJS
  emailjs.sendForm('zagesolutions', 'template_2i0b6vn', form)
    .then(() => {
      // Caso o envio seja bem-sucedido
      window.location.href = '../message.html'; // Aqui está o redirecionamento
      form.reset(); // Reseta o formulário
      loadingMessage.remove(); // Remove a mensagem de carregamento
    })
    .catch((error) => {
      // Caso ocorra algum erro
      console.error('Erro ao enviar o formulário:', error);
      alert('Houve um erro ao enviar sua mensagem. Por favor, tente novamente.');
      loadingMessage.remove(); // Remove a mensagem de carregamento
    });
});
















/** 

// Inicializar Email.js
emailjs.init('PRTjJ0q7AMwt4JCuz');

// Selecionar o formulário
const form = document.getElementById('contactForm');

form.addEventListener('submit', function (event) {
  event.preventDefault(); // Previne o envio padrão do formulário

  // Obter os valores dos campos do formulário
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const message = document.getElementById('message').value.trim();
  const services = document.getElementById('services').value.trim();

  // Verificar se os campos obrigatórios estão preenchidos
  if (!name || !email || !phone || !message || !services) {
    alert('Por favor, preencha todos os campos obrigatórios.');
    return; // Impede o envio do formulário
  }

  // Exibir uma mensagem de carregamento
  const loadingMessage = document.createElement('p');
  loadingMessage.textContent = 'Enviando...';
  form.appendChild(loadingMessage);

  // Enviar os dados do formulário para Email.js
  emailjs.sendForm('zagesolutions', 'template_2i0b6vn', form)
    .then(() => {
      // Caso o envio seja bem-sucedido
      alert('Sua mensagem foi enviada com sucesso!');
      form.reset(); // Reseta o formulário
      loadingMessage.remove(); // Remove a mensagem de carregamento
    })
    .catch((error) => {
      // Caso ocorra algum erro
      console.error('Erro ao enviar o formulário:', error);
      alert('Houve um erro ao enviar sua mensagem. Por favor, tente novamente.');
      loadingMessage.remove(); // Remove a mensagem de carregamento
    });
});



 
 **/