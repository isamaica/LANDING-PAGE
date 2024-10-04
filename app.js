// Função para validar e enviar o formulário
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const errorMsg = document.getElementById('errorMsg');

    // Validação simples
    if (name.trim() === '' || email.trim() === '') {
        errorMsg.textContent = 'Por favor, preencha todos os campos.';
        return;
    }

    // Limpa a mensagem de erro
    errorMsg.textContent = '';

    // Armazenar cookies de forma segura
    document.cookie = `name=${encodeURIComponent(name)}; path=/; Secure; HttpOnly`;
    document.cookie = `email=${encodeURIComponent(email)}; path=/; Secure; HttpOnly`;

    alert('Formulário enviado com sucesso!');
    document.getElementById('contactForm').reset(); // Limpa o formulário
});

