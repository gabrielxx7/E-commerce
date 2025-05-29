const form = document.getElementById('contact-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    console.log(`Nome: ${name.value}, E-mail: ${email.value}, Mensagem: ${message.value}`);

    // Criar e exibir mensagem de sucesso
    const successMsg = document.createElement('div');
    successMsg.textContent = 'Mensagem enviada com sucesso!';
    successMsg.style.backgroundColor = '#d4edda';
    successMsg.style.color = '#155724';
    successMsg.style.padding = '12px';
    successMsg.style.marginTop = '10px';
    successMsg.style.border = '1px solid #c3e6cb';
    successMsg.style.borderRadius = '5px';
    successMsg.style.textAlign = 'center';
    successMsg.style.transition = 'opacity 0.5s ease';
    
    form.parentElement.insertBefore(successMsg, form.nextSibling);

    // Remover mensagem após 4 segundos
    setTimeout(() => {
        successMsg.style.opacity = '0';
        setTimeout(() => successMsg.remove(), 500);
    }, 4000);

    // Limpar os campos
    name.value = '';
    email.value = '';
    message.value = '';
});

